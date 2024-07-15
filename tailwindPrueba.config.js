/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que Tailwind escanee todos los archivos relevantes
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'], // Añade sans-serif como fallback
        montserrat: ['Montserrat', 'sans-serif'], // Añade sans-serif como fallback
      },
      colors: {
        darkOrange: "#EB5757",
        black1: "#333333",
        gray1: "#BDBDBD",
        gray2: "#F2F2F2",
        gray3: "#4F4F4F",
        gray4: "#828282",
      },
      boxShadow: {
        cu: "0 1px 6px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};


