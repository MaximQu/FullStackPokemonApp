/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		fontFamily: {
			madimi: ["Madimi One", ...defaultTheme.fontFamily.sans],
		},
		container: {},
		screens: {
			"2xs": "375px",
			xs: "480px",
			sm: "575px",
			md: "768px",
			lg: "991px",
			xl: "1140px",
		},
		extend: {
			colors: {
				primary: "#283959",
				secondary: "#F29F8D",
				purple: "#69688C",
				blue: "#8EA3BF",
				lightPeach: "#F2BC8D",
			},
		},
	},
	plugins: [],
};
