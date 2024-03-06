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
          "primary-content": "#161719",
          secondary: "#0089d0",
          "secondary-content": "#fafafa",
          accent: "#0c465f",
          "accent-content": "#fafafa",
          neutral: "#fafafa",
          "neutral-content": "#161719",
          "base-100": "#161719",
          "base-content": "#fafafa",
          info: "#fb923c",
          "info-content": "#161719",
          success: "#65a30d",
          "success-content": "#161719",
          warning: "#eab308",
          "warning-content": "#161719",
          error: "#ef4444",
          "error-content": "#161719",
        },
      },
      "light",
      "dark",
      "nord",
    ],
  },
};
