module.exports = {
    content: [
      './assets/**/*.{vue,js,css}',
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
    ],
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('daisyui'),
    ],
};
  