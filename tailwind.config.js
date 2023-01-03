/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2a9392",

          secondary: "#43ef68",

          accent: "#dd6c85",

          neutral: "#1F262D",

          "base-100": "#E4E2E9",

          info: "#93BBE1",

          success: "#15BC84",

          warning: "#B39814",

          error: "#EB2019",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
