/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../templates/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5248FF",
          secondary: "#2E3C53",
          accent: "#FFBB33",
          neutral: "#FBFBFE",
          "base-300": "#2E3C53",
          "base-200": "#121E2F",
          "base-100": "#010D1E",
          "base-content": "#FFFFFF",
          info: "#00B4FE",
          success: "#01A96F",
          warning: "#FEBF00",
          error: "#FE5961",
        },
      },
    ],
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};
