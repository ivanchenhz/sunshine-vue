const colors = require('./colors');

module.exports = {
  prefix: 'ss-',
  darkMode: 'class',
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      theme: colors.blue,

      ...colors,
    },
    boxShadow: {
      none: 'none',
      DEFAULT: '0 2px 4px rgba(0,0,0,0.16), 0px 0px rgba(0,0,0,0.18)',
      md: '0 4px 8px rgba(0,0,0,0.16), 0px 0px rgba(0,0,0,0.16) ',
      lg: '0 8px 16px rgba(0,0,0,0.16), 0px 0px rgba(0,0,0,0.14)',
      xl: '0 24px 48px rgba(0,0,0,0.2), 0px 0px rgba(0,0,0,0.12)',
    },
  },
}
