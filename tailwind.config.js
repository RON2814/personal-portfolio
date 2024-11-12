/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "san-serif"],
      },
      colors: {
        // Darkmode
        myBgColor: "#11090B",
        myPrimary: "#D897AA",
        myPrimaryHover: "#d8829c",
        mySecondary: "#872239",
        myAccent: "#E43F65",
        myTrueSecondary: "#300D15",

        // Lightmode
        lightBgColor: "#f6eef0",
        lightPrimary: "#68273b",
        lightPrimaryHover: "#7c2741",
        lightSecondary: "#dd7890",
        lightAccent: "#c01b42",
        lightTrueSecondary: "#f2cfd7",
      },
      flex: {
        2: "1 1 30%",
        3: "1 1 70%",
      },
    },
  },
  plugins: [],
};
