/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      //          screens  ------------------
      screens:{
        'smm':'300px'
        // => @media (min-width: 300px) { ... }
      },

      //            width  ----------------
      width:{
        '100':'100%',
        '50':'50%',
        '75':'75%',
        '25':'25%'
      },
      maxWidth:{
        '1200':'1200px'
      },

      //           font  ------------------
      fontFamily:{
        'roboto':['Roboto', 'sans-serif']
      },
      fontWeight:{
        bold:700,
        medium:500,
        normal:400
      },

      //           colors  ------------------
      colors:{
        'red':'rgba(206, 18, 18, 1)',
        'white-iamdb-0.4':'rgba(238, 235, 221, 0.4)',
        'white-iamdb-0.6':'rgba(238, 235, 221, 0.6)',
        'white-iamdb-1':'rgba(238, 235, 221, 1)'
      },

      //           border-radius  ----------------
      borderRadius:{
        'circle':'50%',
        'curve-100':'100px',
        'curve-12':'12px'
      }
    },
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

