/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inset-custom":
          " inset 4px 3px 5px 0px rgba(0,0,0,0.25)",
      },
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        playwrite: ["Playwrite AR", " cursive"],
        DMSANS: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// tailwind.config.js
