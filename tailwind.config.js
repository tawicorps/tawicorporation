/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container:{
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
       primary: "#14b8a6",
        dark: "#ffff",
        secondary:"#64748b",
        blue:"#081b29",
        bg: "#081b29",
        nav:"#64748b",
        niv:"#164e63",
            },
      screens:{
        "2xl": "1230px",
      }
    },
  },
  plugins: [],
};
