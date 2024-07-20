import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), nodePolyfills()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
