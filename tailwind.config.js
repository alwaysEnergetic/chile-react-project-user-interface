module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightYellow: { t1: "#FE441A" },
        lightGray: "#D1CDC5",
        tabBackground:'#F2F0ED'
      },
      fontFamily: {
        'sans': ["Roboto"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
