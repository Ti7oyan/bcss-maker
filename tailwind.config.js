module.exports = {
  content: [
    './index.html',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '375px',
        'lg': '425px',
        'xl': '768px',
        '2xl': '1024px'
      }
    },
  },
  plugins: [],
};
