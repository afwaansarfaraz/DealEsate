import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050D1D',
          900: '#07152E',
          DEFAULT: '#0B1F44',
          800: '#0F2A5C',
          700: '#14387A',
          600: '#1A4A9E',
        },
        gold: {
          DEFAULT: '#D4A017',
          hover: '#B88910',
          light: '#F3E5AB',
          muted: '#C28D27',
          glow: 'rgba(212, 160, 23, 0.25)',
        },
        dark: {
          bg: '#0E1117',
          surface: '#141A24',
          card: '#161D2B',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        warm: {
          surface: '#F5F3E8',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
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
        'gold-sm': '0 2px 10px rgba(212, 160, 23, 0.15)',
        'gold-md': '0 4px 20px rgba(212, 160, 23, 0.22)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;

