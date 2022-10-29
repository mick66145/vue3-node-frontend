const colors = require('windicss/colors')

export default {
  extract: {
    include: ['src/**/*.{html,vue,jsx,tsx,svelte}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      boxShadow: {
        clear: 'var(--shadow-none)',
      },
    },
    screens: {
      md: '768px',
      lg: '1200px',
      portrait: { raw: '(orientation: portrait)' },
      landscape: { raw: '(orientation: landscape)' },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      primary: {
        1: 'var(--color-primary-1)',
      },
    },
    borderRadius: {
      none: '0px',
      // DEFAULT: 'var(--border-radius)',
    },
    // boxShadow: {
    //   none: 'none',
    // },
    fontSize: {
      // base: 'var(--font-base)',
    },
    // content: {
    //   none: 'none',
    // },
    fontFamily: {
      sans: [
        'Noto Sans TC',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },

  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/scroll-snap'),
  ],
}
