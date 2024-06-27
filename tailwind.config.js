/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.js", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
      },
    },
    screens: {
      xlarge: "1280px",
      large: "1024px",
      xmedium: "900px",
      medium: "768px",
      tablet: "660px",
      small: "550px",
      xsmall: "440px",
      xxsmall: "378px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none" /* Safari and Chrome */,
        },
      });
    },
    require("@tailwindcss/aspect-ratio"),
  ],
};
