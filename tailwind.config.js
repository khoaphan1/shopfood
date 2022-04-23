module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  screens: {
    's-mobile': '320px',
    // => @media (min-width: 640px) { ... }
    'mobile': '480px',
    // => @media (min-width: 640px) { ... }
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  plugins: [],
}
