/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xs': '410px',
				'4xl': '1800px'
			},
			colors: {
				background: "var(--base)",
				backgroundLite: "var(--baseLite)",
				foreground: "var(--text)",
				primary: "hsl(var(--primary))",
				secondary: "hsl(var(--secondary))",
				mixColor: "hsl(var(--mixColor))",
				primaryLite: "var(--primaryLite)",
				primaryLiteAlt: "var(--primaryLiteAlt)",
				secondaryLite: "var(--secondaryLite)",
				secondaryLiteAlt: "var(--secondaryLiteAlt)",
				footer: "var(--footer)",
				contactSocialColor: "var(--contactSocialColor)",
			},
			fontFamily: {
				poppins: "var(--astro-font-poppins)",
				satisfy: "var(--astro-font-satisfy)",
				ubuntu: "var(--astro-font-ubuntu)",
				orbitron: "var(--astro-font-orbitron)",
				grotesk: "var(--astro-font-grotesk)",
			},
		},
	},
	plugins: [],
}
