/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        lightgreen: "#33E2B4",
        lightgreenV:"#29D3A2",
        darkgrenn: '#062419',
        darkgrennV: '#00110A',
        palegray: '#484752',
        palegrayV:'#3C3C3F',
        trueorange: '#F07155',
        trueorangeV: '#EA5F57',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
