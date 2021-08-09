module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightYellow: { t1: "#FE441A" },
        lightGray: "#D1CDC5",
        tabBackground:'#f2f0ed',
        contentBackground:'#f7f6f5'
        },
    fontFamily: {
        'sans': ["Roboto"]
      },
      width: {
        '1/7' : '14.28%',
        '6/7' : '85.71%',
      }
    },
    borderRadius: {
      'full' : '9999px',
      'special': '26px',

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
