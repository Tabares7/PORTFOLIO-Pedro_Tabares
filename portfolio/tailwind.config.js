/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        lightgreen: "#33E2B4",
        darkgrenn: '#062419',
        palegray: '#484752',
        trueorange: '#F07155',
      }
    },
  },
  plugins: [],
};
