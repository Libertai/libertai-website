/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx,vue}"],
	theme: {
		colors: {
			primary: "#3354FF",
			secondary: "#D2DCFF",
			white: "#F6F8FF",
			neutral: {
				100: "#FFFFFF",
				200: "#F9F9F9",
				300: "#ECF0FA",
				400: "#D8DBE9",
				500: "#AEB3C1",
				600: "#474B64",
				700: "#212438",
				800: "#0E1435",
			},
		},
		fontFamily: {
			sans: ["Mulish", "sans-serif"],
		},
		fontSize: {
			h1: ["48px", "56px"],
			h2: ["36px", "44px"],
		},
		extend: {},
	},
	plugins: [],
};
