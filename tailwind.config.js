/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 15px rgba(0, 123, 255, 0.6)",
      },
      backgroundImage: {
        "custom-bg": "url('./assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
