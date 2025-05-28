const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  safelist: [
    'rounded',
    {
      pattern: /^(bg|accent)-/,
      variants: ['before', 'checked'],
    },
    {
      pattern: /^(left|right|bottom|top)-(0|1\/2|auto|full)/,
      variants: ['sm', 'sm:after', 'md'],
    },
    {
      pattern: /^(translate-x|-translate-x|translate-y|-translate-y)-(0|1\/2)/,
      variants: ['sm', 'sm:after', 'md'],
    },
    {
      pattern: /^(hidden|block)/,
      variants: ['sm:after'],
    },
    {
      pattern: /^(mb|ml|mt|mr)-4/,
      variants: ['sm', 'sm:after', 'md'],
    },
    {
      pattern: /^(rounded)-/,
      variants: ['sm', 'sm:after'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      ...defaultTheme.screens,
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      ...defaultTheme.colors,
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      opacity: {
        DEFAULT: '#0000005F',
      },
      black: {
        DEFAULT: '#000000',
        100: '#282828',
        200: '#252720FF',
        300: '#353535',
        400: '#494949',
      },
      tahiti: {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      red: {
        DEFAULT: '#FF0000',
        100: '#FF0000',
      },
      green: {
        DEFAULT: '#4CB507FF',
      },
      gray: {
        DEFAULT: '#8F8F8F',
        50: '#c7c7c7',
        100: `#ededed`,
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-safe-area'),
  ],
};
