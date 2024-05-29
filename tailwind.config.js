/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Defina uma nova cor de fundo personalizada
        'custom-gray': '#22222',
        'blue-prefeitura': '#3464A7',
      },
      hover: {
        // Especifica a cor de fundo no hover
        'custom-gray': 'custom-gray',
      },
    },
  },
  plugins: [],
}