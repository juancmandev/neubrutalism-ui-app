/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        soft: '#f5ebd7',
        pink: '#ff5e8c',
      },
      fontFamily: {
        clashDisplay: 'var(--font-clash-display)',
      },
      boxShadow: {
        DEFAULT: '4px 4px 0 #000',
        sm: '4px 4px 0 #000',
        md: '8px 8px 0 #000',
        lg: '12px 12px 0 #000',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '13': '52px',
        '14': '56px',
        '15': '60px',
        '16': '64px',
        '17': '68px',
        '18': '72px',
        '19': '76px',
        '20': '80px',
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        circle: '100%',
      },
    },
  },
  plugins: [],
};
