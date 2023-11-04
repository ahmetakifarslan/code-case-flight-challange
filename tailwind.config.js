/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: {
    enabled: true,
  },
  theme: {
    extend: {
      container: {
        center: true,
      },
      boxShadow: {
        default: "0 4px 8px 0 rgba(0,0,0,.05)",
      },
      borderColor: {
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
