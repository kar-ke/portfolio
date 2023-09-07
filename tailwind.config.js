/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '390px',
      // => @media (min-width: 360px) { ... }

      'tablet': '750px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1150px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

