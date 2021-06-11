module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
      textColor: ['active'],
      textOverflow: ['hover', 'focus'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
