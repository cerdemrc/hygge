/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			black: '#000000',
			white: '#ffffff',
			blue: {
				hover: '#374151',
				100: '#161b3d',
			},
			gray: {
				100: '#eeeff1',
			},
		},
	},
	plugins: [],
};
