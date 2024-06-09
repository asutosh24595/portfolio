/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      boxShadow: {
        glow: "0 0 15px rgba(0, 123, 255, 0.6)",
      },
      backgroundImage: {
        "custom-bg": "url('./assets/bg1.jpg')",
      },
    },
  },
  plugins: [],
};
