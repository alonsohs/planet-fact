module.exports = {
  // mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        antonio : ['Antonio'],
        spartan: ['Spartan']
      },
      backgroundImage: theme => ({
        'star-pattern': 'url(./assets/background-stars.svg)'
      }),
    colors: {
      spaceGray : '#979797',
      background: '#070724',
      spaceDarkGray: '#38384F',
      spaceLightGray: '#838391',
      spaceLightBlue: '#419EBB',
      spaceYellow: '#EDA249',
      spacePurple: '#6F2ED6',
      spaceOrange: '#D14C32',
      spaceRed: '#D83A34',
      spaceOcre: '#CD5120',
      spaceGreen: '#1EC2A4',
      spaceBlue: '#2D68F0'
    },
    fontSize: {
      base: ['14px', '25px'],
      h4: ['11px', '25px'],
      h3: ['12px', '25px'],
      h2: ['40px', '52px'],
      h1: ['80px', '103px'],
      logo: '28px',
      xxs : '8px'
    }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
