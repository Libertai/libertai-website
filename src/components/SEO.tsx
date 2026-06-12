import { Helmet } from "react-helmet-async";

interface SEOProps {
	title: string;
	description: string;
	path: string;
	image?: string;
}

const BASE_URL = "https://libertai.io";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og.png`;

export function SEO({ title, description, path, image }: SEOProps) {
	const fullTitle = path === "/" ? "LibertAI — Private AI, Unleashed" : `${title} | LibertAI`;
	const url = `${BASE_URL}${path}`;
	const ogImage = image ? (image.startsWith("http") ? image : `${BASE_URL}${image}`) : DEFAULT_OG_IMAGE;

	return (
		<Helmet>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={url} />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content="LibertAI" />
			<meta property="og:image" content={ogImage} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:alt" content="LibertAI — Private AI, Unleashed" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@Libertai_DAI" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />
		</Helmet>
	);
}
