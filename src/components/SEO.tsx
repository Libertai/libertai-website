import { Helmet } from "react-helmet-async";

interface SEOProps {
	title: string;
	description: string;
	path: string;
}

const BASE_URL = "https://libertai.io";

export function SEO({ title, description, path }: SEOProps) {
	const fullTitle = path === "/" ? "LibertAI — Private AI, Unleashed" : `${title} | LibertAI`;
	const url = `${BASE_URL}${path}`;

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

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@Libertai_DAI" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
		</Helmet>
	);
}
