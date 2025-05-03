/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bgColor: '#000000', // Hel sort bakgrunn (erstattet tidligere blågrønn)
        borderYellow: '#FFAB24',
        darkYellow: '#99732D',
        akatsukiRed: '#FF0000',
      },
      fontFamily: {
        ShPinscher: ['SHPinscher', 'sans-serif'],
        Creepster: ['Creepster', 'cursive'],
      },
      fontSize: {
        content: '20px',
        title: '24px',
        akatsuki: '3rem',
      },
    },
  },
  plugins: [],
};
