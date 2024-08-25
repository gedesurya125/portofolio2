/** @type {import('tailwindcss').Config} */
module.exports = {
  // https://tailwindcss.com/docs/content-configuration
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // https://tailwindcss.com/docs/theme
  theme: {
    screens: {
      sm: '750px',
      md: '1000px',
      lg: '1300px', //? this should be the same with the breakpoints setup in the global
    },
    fontFamily: {
      body: ['var(--font-inter)'],
      heading: ['var(--font-playFair)'],
    },
    fontSize: {
      sm: ['1rem', '1.5em'],
      md: ['2rem', '1.35em'],
      lg: ['3rem', '1.15em'],
    },
    extend: {
      spacing: {
        'card-sm': '1rem',
        'card-md': '2rem',
        'card-lg': '3rem',
        'container-phone': '32rem',
        'container-tablet-portrait': '75rem',
        'container-tablet-landscape': '100rem',
        'container-desktop': '130rem',
      },
      gridTemplateColumns: {
        24: 'repeat(24, 1fr)',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        25: '25',
      },
    },
  },
  // https://tailwindcss.com/docs/plugins
  plugins: [],
};
