/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'ssm': '12px', // Custom font size
      },
      lineHeight: {
        'ssm': '16px', // Custom line height
      },
    }
  },
  plugins: [],
}

