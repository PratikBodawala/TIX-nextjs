const defaultTheme = require('tailwindcss/defaultTheme')
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
            royalBlue: '#1A2C50',
            sunshineYellow: '#FFBE00',
            sweetRed: '#FF6B6B',
            skyBlue: '#118EEA',
            white:'#FFFFFF',
            pastelYellow: '#F2C46F',
            cgvRed: '#EC1E2B',
            xxiGradient: '#',
            cinepolisBlue: '#000E62',

            btnDefault: '#1A2C50',
            btnHover: '#282764',
            btnPressed: '#383782',

            shade900:'#333333',
            shade800:'#333D58',
            shade700:'#414A62',
            shade600:'#5A637A',
            shade500:'#8F98AA',
            shade400:'#9DA8BE',
            shade300:'#BDC5D4',
            shade200:'#DADFE8',
            shade100:'#FFFFFF',
          },
          backgroundImage:{
            'theater': 'url("/images/theater-bg-img.webp")',
          },
          fontFamily: {
            "body": ["Roboto",
              ...defaultTheme.fontFamily.sans
            ],
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
