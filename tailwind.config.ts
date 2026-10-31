import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F3EA',
          light: '#FAF7F1',
          border: '#E8E2D3',
        },
        'soft-blue': {
          DEFAULT: '#EAF1F8',
          alt: '#DEEAF4',
          border: '#CFE0EF',
        },
        navy: {
          950: '#08172B',
          900: '#0D223E',
          DEFAULT: '#102B4E',
          800: '#14355E',
          700: '#173D6C',
          600: '#1E4C85',
          surface: '#14355E',
        },
        gold: {
          DEFAULT: '#D9A323',
          hover: '#BE8E1B',
          deep: '#A07510',
          light: '#FDF3D8',
          muted: '#C4921E',
          glow: 'rgba(217, 163, 35, 0.25)',
        },
        charcoal: '#172B4D',
        slate: {
          muted: '#64748B',
        },
        border: {
          light: '#E5E7EB',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(217, 163, 35, 0.2)',
        'gold-md': '0 4px 20px rgba(217, 163, 35, 0.3)',
        'card-light': '0 4px 20px -2px rgba(16, 43, 78, 0.05), 0 2px 6px -1px rgba(16, 43, 78, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(16, 43, 78, 0.09), 0 4px 10px -2px rgba(16, 43, 78, 0.04)',
        'card-dark': '0 10px 30px -10px rgba(8, 23, 43, 0.6)',
      },
    },
  },
  plugins: [],
} satisfies Config;
