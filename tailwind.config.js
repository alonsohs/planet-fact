module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        antonio : ['Antonio'],
        spartan: ['Spartan']
      }
    },
    fontSize: {
      base: ['14px', '25px'],
      xs : ['11px', '25px'],
      sm: ['12px', '25px'],
      lg: ['40px', '52px'],
      xl: ['80px', '103px']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
