/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        caribbean: "#006D77",
        "french-gray": "#A8AEC1",
        "ash-gray": "#B5D2CB",
        night: "#0D160B",
        "raisin-black": "#3A2E39",
      },
    },
  },
  plugins: [],
};
