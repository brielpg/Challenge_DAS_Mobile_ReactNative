/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'azul-bebe-claro': '#D4F4F8',
        'azul-bebe-escuro': '#95E5E5',
        'roxo-texto': '#2C013B',
        'cinza-claro': '#80000000',
        'cinza-escuro': '#A6000000',
        'cinza-escuro-plus': '#D9000000',
      }
    },
  },
  plugins: [],
}

