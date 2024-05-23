/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Gray: "#ededed", // Gray
        BlueDark: "#328eb3",   // Azul escuro
        BluePurple: "#413c91", // azul roxo
        BluePurple1: "#504abb", // azul roxo mais claro
        BlueLight: "#62d0d3", // azul claro
        BlueLight1: "#15c4d4",
        Green: "#1db950",   // green
        Black: "#131415", // Preto
        White: "#f9fafb", // Branco
      },
      fontFamily: {
        modelica: ["MODELICA", "sans-serif"],
        modelicaBold: ["MODELICA-BOLD", "sans-serif"],
        modelicaLight: ["MODELICA-LIGHT", "sans-serif"],
        modelicaItalic: ["MODELICA-ITALIC", "sans-serif"],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px', 
        '2xl': '1360px',
      },
    },
  },
  plugins: [
  ],
}

