module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: theme => ({
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      }),
      backgroundImage: theme => ({
        'lp-hero': "url('/src/images/color-ropes.jpg')"
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#92C63F'
      }),
      height: theme => ({
        '129': 'height: 10rem'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
