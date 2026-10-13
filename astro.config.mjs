// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://libertai.io",
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
		routing: { prefixDefaultLocale: false },
	},
});
