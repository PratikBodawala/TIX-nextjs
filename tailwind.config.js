/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        extend: {
          colors: {
            clifford: '#da373d',
            btnPrimary: '#1A2C50',
            textPrimary: '#FFBE00',
            errorText: '#FF6B6B',
            link: '#118EEA',
            white:'#FFFFFF',
            ticket: '#F2C46F',
            redPrimary: '#EC1E2B',
            xxiGradient: '#',
            cinepolisBlue: '#000E62',
            btnDefault: '#1A2C50',
            btnHover: '#282764',
            btnPressed: '#383782'
          },
          backgroundImage:{
            'theater': 'url("/images/theater-bg-img.jpeg")',
          }
        }
      },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
