/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: {
        max: "1199.99px",
      },
      md: {
        max: "991.99px",
      },
      sm: {
        max: "767.99px",
      },
      xs: {
        max: "479.99px",
      },
      extra: {
        max: "569.99px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        heroGradient:
          "linear-gradient(94.59deg, #492384 2.39%, #E878CF 97.66%)",
      },
      colors: {
        blueviolet: "#502785",
        lightgrey: "#666768",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fade-in .1s ease-in-out",
      },
    },
  },
  plugins: [],
};
