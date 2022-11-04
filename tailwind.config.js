/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f76adb",

          secondary: "#efa2b2",

          accent: "#46ce9a",

          neutral: "#251F29",

          "base-100": "#FCFCFD",

          info: "#6D9AD9",

          success: "#14523D",

          warning: "#F5AB51",

          error: "#ef4444",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
