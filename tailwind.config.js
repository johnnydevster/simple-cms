const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: colors.slate,
      white: colors.white,
      green: colors.emerald,
      primary: colors.indigo,
      secondary: colors.green,
    },
    extend: {},
  },
  plugins: [],
};
