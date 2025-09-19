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
				inputBackground: "var(--inputBackground)",
			},
			fontFamily: {
				poppins: "var(--astro-font-poppins)",
				orbitron: "var(--astro-font-orbitron)",
				grotesk: "var(--astro-font-grotesk)",
			},
			backgroundImage: {
				'headerGradient': 'var(--headerGradient)',
				'OrbitGradient': 'var(--orbitGradient)',
				'skillGradient': 'var(--SkillGradient)',
				'skillGradientAlt': 'var(--SkillGradientAlt)',
				'LinkBtnGradient': 'var(--LinkBtnGradient)',
				'cardGradient': 'var(--cardGradient)',
				'imgOverlayGradient': 'radial-gradient(circle, transparent, var(--base) 95%),linear-gradient(180deg,var(--base),transparent 25%),linear-gradient(0deg,var(--base),transparent 25%) '
			},
			boxShadow: {
				'front': 'var(--shadowOne) 0px 1px 1px 0px inset',
				'inner-lg': 'var(--inputShadowOne) 3px 3px 6px 0px inset, var(--inputShadowTwo) -3px -3px 6px 1px inset',
			},
			keyframes: {
				"ripple": {
					from: { opacity: 1, scale: 0 },
					to: { opacity: 0, scale: 1 },
				},
				toastIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				toastOut: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(20px)' },
				},
			},
			animation: {
				"ripple": "ripple 1s infinite",
				'toast-in': 'toastIn 0.3s ease-out forwards',
				'toast-out': 'toastOut 0.3s ease-in forwards',
			},
		},
	},
	plugins: [],
}
