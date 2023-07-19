/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        // 10: "400px",
        "100vh": "100vh",
      },
    },
  },
  plugins: [],
};
