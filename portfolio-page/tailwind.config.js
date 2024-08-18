/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xs": "440px",
      xs: "540px",
      sm: "640px",
      md: "768px",
      lmd: "802px",
      mlg: "913px",
      lg: "1024px",
      xlg: "1084px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "hero-backgroundImage": "url('./src/assets/image1.jpg')",
      },
    },
  },
  plugins: [],
};
