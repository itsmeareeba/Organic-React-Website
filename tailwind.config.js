/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1240px" },
        // => @media (max-width: 1240px) { ... }

        lg: { max: "992px" },
        // => @media (max-width: 992px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "650px" },
        // => @media (max-width: 650px) { ... }
      },
    },
  },
  plugins: [],
};

