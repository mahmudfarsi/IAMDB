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
      fontSize:{
        'smm':'12px',
        sm:'14px',
        'xsm':'16px',
        '2xsm':'18px',
        md:'21px',
        'xmd':'24px',
        '2xmd':'28px',
        '3xmd':'32px',
        lg:'40px',
        'xlg':'48px',
        '2xlg':'96px',
        '3xlg':'128px'
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
        'white-iamdb-1':'rgba(238, 235, 221, 1)',
        'main':'rgba(27, 23, 23, 1)',
        'hover-opacity-0.1':'rgba(255, 255, 255, 0.1)'
      },

      //           opacity  ------------------
      opacity:{
        '71':'0.71'
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
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  }
}

