/**
 * Post-build prerender step.
 *
 * The site is a client-rendered SPA: react-helmet-async sets per-page meta at
 * runtime, which Google can see but social scrapers (X, Telegram, Discord,
 * Slack, LinkedIn) and non-JS crawlers cannot. This script reads each route's
 * <SEO> props (and FAQ data) straight from the route source files — keeping
 * the components as the single source of truth — and stamps a per-route copy
 * of dist/index.html with the correct title, description, canonical, Open
 * Graph / Twitter tags, and FAQPage JSON-LD. It also generates sitemap.xml.
 *
 * Vercel serves static files before applying rewrites, so dist/<path>/index.html
 * takes precedence over the SPA catch-all for known routes.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const routesDir = join(root, "src", "routes");
const distDir = join(root, "dist");

const BASE_URL = "https://libertai.io";

// Mirrors the title logic in src/components/SEO.tsx
const fullTitle = (title, path) => (path === "/" ? "LibertAI — Private AI, Unleashed" : `${title} | LibertAI`);

// ---------------------------------------------------------------------------
// Collect route files
// ---------------------------------------------------------------------------

function routeFiles(dir) {
	return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) return routeFiles(full);
		if (entry.isFile() && entry.name.endsWith(".tsx") && entry.name !== "__root.tsx") return [full];
		return [];
	});
}

function unescapeJsString(value) {
	return value
		.replace(/\\n/g, " ")
		.replace(/\\"/g, '"')
		.replace(/\\'/g, "'")
		.replace(/\\`/g, "`")
		.replace(/\s+/g, " ")
		.trim();
}

function extractAttr(jsx, name) {
	const match = jsx.match(new RegExp(`${name}="((?:[^"\\\\]|\\\\.)*)"`));
	return match ? unescapeJsString(match[1]) : null;
}

function extractFaqs(source) {
	const faqs = [];
	const pairRe = /question:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*answer:\s*\n?\s*"((?:[^"\\]|\\.)*)"/gs;
	let match;
	while ((match = pairRe.exec(source)) !== null) {
		faqs.push({ question: unescapeJsString(match[1]), answer: unescapeJsString(match[2]) });
	}
	return faqs;
}

function gitLastMod(file) {
	try {
		const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], { cwd: root, encoding: "utf8" }).trim();
		return out ? out.slice(0, 10) : null;
	} catch {
		return null;
	}
}

const routes = [];
for (const file of routeFiles(routesDir)) {
	const source = readFileSync(file, "utf8");
	const pathMatch = source.match(/createFileRoute\("([^"]+)"\)/);
	const seoMatch = source.match(/<SEO\s([\s\S]*?)\/>/);
	if (!pathMatch || !seoMatch) {
		console.warn(`prerender: skipping ${relative(root, file)} (no createFileRoute/SEO found)`);
		continue;
	}
	const path = pathMatch[1];
	const title = extractAttr(seoMatch[1], "title");
	const description = extractAttr(seoMatch[1], "description");
	if (!title || !description) {
		console.warn(`prerender: skipping ${relative(root, file)} (missing SEO title/description)`);
		continue;
	}
	// The home page's FAQ content lives in its section component, not the route file.
	const faqSource =
		path === "/" ? readFileSync(join(root, "src", "components", "home", "FAQSection.tsx"), "utf8") : source;
	routes.push({ path, title, description, faqs: extractFaqs(faqSource), lastmod: gitLastMod(file) });
}

routes.sort((a, b) => a.path.localeCompare(b.path));

// ---------------------------------------------------------------------------
// Stamp per-route HTML
// ---------------------------------------------------------------------------

const template = readFileSync(join(distDir, "index.html"), "utf8");
const escapeHtml = (text) =>
	text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function stamp(route) {
	const title = escapeHtml(fullTitle(route.title, route.path));
	const description = escapeHtml(route.description);
	const url = `${BASE_URL}${route.path === "/" ? "/" : route.path}`;

	let html = template
		.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
		.replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
		.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
		.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`);

	const extra = [
		`\t<link rel="canonical" href="${url}" />`,
		`\t<meta property="og:url" content="${url}" />`,
		`\t<meta name="twitter:title" content="${title}" />`,
		`\t<meta name="twitter:description" content="${description}" />`,
	];

	if (route.faqs.length > 0) {
		const faqSchema = {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: route.faqs.map((faq) => ({
				"@type": "Question",
				name: faq.question,
				acceptedAnswer: { "@type": "Answer", text: faq.answer },
			})),
		};
		extra.push(`\t<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`);
	}

	html = html.replace("</head>", `${extra.join("\n")}\n</head>`);

	// Keep the noscript fallback in sync with the page it now represents.
	html = html.replace(/(<noscript>[\s\S]*?<h1>)[^<]*(<\/h1>\s*<p>)[^<]*(<\/p>)/, `$1${title}$2${description}$3`);

	return html;
}

for (const route of routes) {
	const outDir = route.path === "/" ? distDir : join(distDir, route.path.slice(1));
	mkdirSync(outDir, { recursive: true });
	writeFileSync(join(outDir, "index.html"), stamp(route));
}

// ---------------------------------------------------------------------------
// Generate sitemap.xml
// ---------------------------------------------------------------------------

function priorityFor(path) {
	if (path === "/") return "1.0";
	if (path.startsWith("/use-cases/")) return "0.7";
	if (["/tokenomics", "/roadmap"].includes(path)) return "0.7";
	return "0.8";
}

function changefreqFor(path) {
	return ["/", "/api", "/search", "/private-ai"].includes(path) ? "weekly" : "monthly";
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map((route) => {
		const lastmod = route.lastmod ? `\n    <lastmod>${route.lastmod}</lastmod>` : "";
		return `  <url>
    <loc>${BASE_URL}${route.path === "/" ? "/" : route.path}</loc>${lastmod}
    <changefreq>${changefreqFor(route.path)}</changefreq>
    <priority>${priorityFor(route.path)}</priority>
  </url>`;
	})
	.join("\n")}
</urlset>
`;

writeFileSync(join(distDir, "sitemap.xml"), sitemap);
writeFileSync(join(root, "public", "sitemap.xml"), sitemap);

console.log(`prerender: stamped ${routes.length} routes, generated sitemap.xml`);
for (const route of routes) {
	console.log(`  ${route.path}${route.faqs.length ? ` (${route.faqs.length} FAQs)` : ""}`);
}
