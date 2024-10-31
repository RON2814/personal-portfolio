/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "san-serif"],
      },
      colors: {
        myBgColor: "#11090B",
        myPrimary: "#D897AA",
        mySecondary: "#872239",
        myAccent: "#E43F65",
        myTrueSecondary: "#300D15",
      },
      flex: {
        2: "1 1 30%",
        3: "1 1 70%",
      },
    },
  },
  plugins: [],
};
