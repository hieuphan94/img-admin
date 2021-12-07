module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      hoverColor: "#3c3a3aa6",
      black: "#000",
      white: "#fff",
      red: "#c00",
      main: {
        light: "#efac8f",
        DEFAULT: "#ef7540",
        dark: "#ef662b",
        superDark: "#611f02",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
