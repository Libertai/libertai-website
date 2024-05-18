const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	safelist: ["dark"],
	prefix: "",

	content: [
		"./pages/**/*.{ts,tsx,vue}",
		"./components/**/*.{ts,tsx,vue}",
		"./app/**/*.{ts,tsx,vue}",
		"./src/**/*.{ts,tsx,vue}",
	],

	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		colors: {
			primary: "#644DF9",
			secondary: "#D2DCFF",
			white: "#F6F8FF",
			gradientFrom: "#9475FB",
			gradientTo: "#CAA1FD",
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
			purple: {
				100: "#F0EDFF",
				200: "#D2CFFF",
				300: "#B4B1FF",
				400: "#7A6AFF",
				500: "#4032FF",
				600: "#3A2DE6",
				700: "#251B99",
				800: "#1B1473",
				900: "#120E4D",
			},
		},
		fontFamily: {
			sans: ["Mulish", "sans-serif"],
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#644DF9",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "#D2DCFF",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				xl: "calc(var(--radius) + 4px)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
				"collapsible-down": {
					from: { height: 0 },
					to: { height: "var(--radix-collapsible-content-height)" },
				},
				"collapsible-up": {
					from: { height: "var(--radix-collapsible-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"collapsible-down": "collapsible-down 0.2s ease-in-out",
				"collapsible-up": "collapsible-up 0.2s ease-in-out",
			},
		},
	},
	plugins: [animate],
};
