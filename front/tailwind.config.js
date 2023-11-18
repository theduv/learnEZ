/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offwhite: "#FFFCF2",
        offblack: "#252422",
        accent: "#EB5E28",
        "offblack-secondary": "#313639",
        "light-gray": "#CCC5B9",
        "dark-gray": "#403D39",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
