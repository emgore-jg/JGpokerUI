/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        jahnelgroup: {
          primary: "#00bdff",
          secondary: "#0089d0",
          accent: "#0c465f",
          neutral: "#fafafa",
          "base-100": "#161719",
        },
      },
      "light",
      "dark",
      "nord",
    ],
  },
};
