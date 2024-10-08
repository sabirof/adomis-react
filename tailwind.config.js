/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { screens: {
    sm: '375px',
    md: '768px',
    'md-900': { 'min': '768px', 'max': '900px' },
    lg: '1100px',
    xl: '1280px',
    '2xl': '1536px',
    custom: '768px', // Custom breakpoint
      customLg: '1281px', // Custom breakpoint
  },
    extend: {
      colors: {
        primary: '#200D41',   // Primärfarbe
        secondary: '#80E7A6', // Sekundärfarbe
        accent: '#B6F1CC',    // Akzentfarbe
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
