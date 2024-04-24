/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        main: "#FF4B33",
        text_gray: "#444444",
        background_gray: "#D3D3D3",
        primary: "#ffffff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        montseratt: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/background.png')",
        'hero-pattern-moto': "url('./src/assets/background_moto.png')",
      },
    },
    screens: {
      xx: "320px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

