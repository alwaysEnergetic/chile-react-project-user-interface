module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightYellow: { t1: "#FE441A" },
        lightGray: "#D1CDC5",
        tabBackground:'#f2f0ed',
        contentBackground:'#f7f6f5',
        mainTableColor:'#e5e1da',
        tableTabs: "#03413f"
        },
      textColor: {
        buttonText: '#f7f6f5'
      } , 
      fontFamily: {
        'sans': ["Roboto"]
      },
      width: {
        '1/7' : '14.28%',
        '2/7' : '28.5%',
        '3/7' : '43%',
        '4/7' : '56%',
        '5/7' : '70%',
        '6/7' : '85.71%'

      }
    },
    borderRadius: {
      'full' : '9999px',
      'special': '26px',

    },
    minWidth: {
      '0': '0',
      '61': '978px',

     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
