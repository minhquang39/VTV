/** @type {import('tailwindcss').Config} */

const plugin = require("tailwind-scrollbar");
module.exports = {
  safelist: ["text-red-500,italic,list-disc,list-inside"],
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textGrayPrimary: "#b2bccc",
        textGraySecond: "#E7EBF0",
        textHover: "#3480eb",
        textBlue: "#337ab7",
        customBg: "rgba(0,0,0,.3)",
        mainMenu: "#07356a",
      },
      boxShadow: {
        customHeader:
          "inset 0px 2px 1px -2px rgba(50, 50, 93, 0.25), 1px 1px 2px -1px rgba(0, 0, 0, 0.30)",
        subMenu: "0 5px 10px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [plugin],
};
