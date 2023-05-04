const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'logo-dcf':"url('~/public/logo-dcf.png')"
      },
      colors: {
        'dcf-dark-brown': '#967E76',
        'dcf-brown':'#D7C0AE',
        'dcf-light-brown': '#EEE3CB',
        'dcf-blue':'#B7C4CF'
      },
      keyframes: {
        autoscroll: {
          '0%': {transform:'translateX(0)'},
          '100%': {transform:'translateX(-100%)'},
        }
      },
      animation: {
        autoscroll: 'autoscroll 20s infinite linear'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1810px',
    },
  },
  plugins: [],
}
