module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: "#181831",
          50: "#111025",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
