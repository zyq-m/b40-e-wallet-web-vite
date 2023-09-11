/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [import("preline/plugin")],
};
