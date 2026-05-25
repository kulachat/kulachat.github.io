/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/prototype/**/*.astro',
    './src/components/prototype/**/*.astro',
    './public/prototype/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Noto Sans Thai"', 'sans-serif'],
        title: ['"FC Subject Rounded"', '"Noto Sans Thai"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        fc: ['"FC Subject Rounded"', '"Noto Sans Thai"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        achieve: {
          blue: '#0A8DCD',
          deep: '#0677AD',
          ink: '#14213d',
          line: '#e5edf5',
          soft: '#f1f8fd',
        },
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.06)',
        soft: '0 3px 10px rgba(0, 0, 0, 0.04)',
        drawer: '-14px 0 40px rgba(28, 45, 71, 0.12)',
      },
    },
  },
};
