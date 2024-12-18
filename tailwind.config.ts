// tailwind.config.js
/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin"
// Let's create a plugin that adds utilities!
const capitalizeFirst = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.capitalize-first:first-letter': {
      textTransform: 'uppercase',
    },
  }
  addUtilities(newUtilities)
})

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      primary: {
        1000: "#001F1F",
        900: "#003939",
        700: "#006263",
        500: "#00a69b",
        400: "#d5f6d7",
        300: "#e8fae9",
      },
      highlight: {
        700: "#bcdb4a",
        500: "#c9e94f",
      },
      accent: {
        900: "#3b105c",
        800: "#563886",
        700: "#391e94",
        500: "#5a35d6",
        300: "#e3d3ff",
        100: "#f7f4fe",
      },
      grey: {
        50: '#F8FAFA',
        100: '#F2F5F5',
        200: '#E5EBEB',
        300: '#D8E0E0',
        400: '#B7C4C4',
        500: '#657373',  // Base text color
        600: '#4D5959',
        700: '#003939',  // Darker text color
        800: '#002626',
        900: '#001F1F',
      },
      error: {
        100: "#ffe5ea",
        500: "#b00020",
      },
      utility: {
        white: "#fff",
        black: "#000",
        error: "#b00020",
        focus: "#2cb0dc",
        yellow: "#ffc000",
        "input-focus": "#005fcc",
      },
      teal: {
        700: '#336161'
      }
    },
    fontFamily: {
      sans: [
        "Poppins",
        "-apple-system",
        "BlinkMacSystemFont",
        "avenir next",
        "avenir",
        "segoe ui",
        "helvetica neue",
        "helvetica",
        "Ubuntu",
        "roboto",
        "noto",
        "arial",
        "sans-serif",
      ],
      serif: [
        "Iowan Old Style",
        "Apple Garamond",
        "Baskerville",
        "Times New Roman",
        "Droid Serif",
        "Times",
        "Source Serif Pro",
        "serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    fontSize: {
      "2xs": "0.625rem", // 10px
      xs: "0.75rem",     // 12px
      sm: "0.875rem",    // 14px
      md: "1rem",        // 16px
      intermediate: "1.125rem", // 18px
      lg: "1.25rem",     // 20px
      "medium-lg": "1.375rem", // 22px  
      xl: "1.5rem",      // 24px
      "2xl": "2rem",     // 32px
      "3xl": "3rem",     // 48px
      'base': '1rem',      // 16px
      display: '2.5rem',  // 40px
      'display-mobile': '1.875rem', // 30px
    },
    lineHeight: {
      'snug': '1.25',      // 20px for 16px font
      'loose': '2',        // 40px for 20px font
      'copy': '1.273',     // 28px (28/22)
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    extend: {
      spacing: {
        18: "4.5rem",
      },
      height: {
        em: "1em",
        button: '59px'
      },
      screens: {
        largeTablet: "800px",
      },
      boxShadow: {
        card: "-4px -4px 20px 0px rgba(255, 255, 255, 0.50), 4px 4px 20px 0px rgba(0, 0, 0, 0.12)",
        filters: "4px 4px 20px 0px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        large: "20px",
        regular: "10px",
        small: "5px",
      },
      keyframes: {
        "enter-and-exit-from-top": {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "10%,90%": { transform: "translateY(32px)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0 },
        },
        "scale-down-96": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.96)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "enter-and-exit-from-top": "enter-and-exit-from-top 4s ease-in-out",
        "rating-input-checked": "scale-down-96 250ms ease-in-out",
        "fade-in": "fade-in 0.5s ease-in-out",
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
      scale: {
        102: "1.02",
        98: "0.98",
      },
    },
  },
  plugins: [capitalizeFirst],

}