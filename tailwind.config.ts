import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FBF9F4',
          warm: '#F5F1E6',
          border: '#E8E3D5',
        },
        'soft-blue': {
          light: '#F8FAFC',
          DEFAULT: '#F0F4F8',
          alt: '#E6EEF6',
          border: '#D6E2EE',
        },
        navy: {
          950: '#050D1D',
          900: '#07152E',
          DEFAULT: '#0B1F44',
          800: '#0F2A5C',
          700: '#14387A',
          600: '#1A4A9E',
          surface: '#0E224A',
        },
        gold: {
          DEFAULT: '#D4A017',
          hover: '#B88910',
          deep: '#996B00',
          light: '#FFF3C4',
          muted: '#C28D27',
          glow: 'rgba(212, 160, 23, 0.25)',
        },
        text: {
          navy: '#07152E',
          charcoal: '#0F172A',
          body: '#334155',
          muted: '#64748B',
          light: '#F8FAFC',
          'light-secondary': '#CBD5E1',
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
        'gold-sm': '0 2px 10px rgba(212, 160, 23, 0.18)',
        'gold-md': '0 4px 20px rgba(212, 160, 23, 0.28)',
        'card-light': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.04)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
