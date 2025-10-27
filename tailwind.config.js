/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#174143',
          DEFAULT: '#427A76',
        },
        accent: {
          orange: '#F9B487',
          cream: '#F5E5E1',
        },
      },
    },
  },
  plugins: [],
}
