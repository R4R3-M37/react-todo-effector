/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		screens: {
			sm: '500px',
			md: '700px',
			lg: '900px',
			xl: '1100px',
			'2xl': '1300px',
			'3xl': '1500px',
			'4xl': '1700px',
			'5xl': '1900px',
			'6xl': '2100px'
		},
		extend: {
			colors: {
				'primary-darken': '#1e2022',
				'secondary-darken': '#181a1b'
			}
		}
	},
	plugins: []
}
