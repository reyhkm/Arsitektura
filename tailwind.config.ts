import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(210, 40%, 96.1%)', // Light mode primary background
          foreground: 'hsl(210, 40%, 9.8%)', // Light mode primary text
        },
        background: 'hsl(0, 0%, 100%)', // Light mode background
        foreground: 'hsl(222.2, 84%, 4.9%)', // Light mode text
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(222.2, 84%, 4.9%)',
        },
        popover: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(222.2, 84%, 4.9%)',
        },
        border: 'hsl(214.3, 31.8%, 91.4%)',
        input: 'hsl(214.3, 31.8%, 91.4%)',
        ring: 'hsl(222.2, 84%, 4.9%)',
        accent: {
          DEFAULT: 'hsl(190, 70%, 50%)', // A modern teal/cyan accent
          foreground: 'hsl(0, 0%, 100%)',
        },
        dark: {
          primary: {
            DEFAULT: 'hsl(210, 40%, 9.8%)', // Dark mode primary background
            foreground: 'hsl(210, 40%, 96.1%)', // Dark mode primary text
          },
          background: 'hsl(222.2, 84%, 4.9%)', // Dark mode background
          foreground: 'hsl(0, 0%, 98%)', // Dark mode text
          card: {
            DEFAULT: 'hsl(222.2, 84%, 4.9%)',
            foreground: 'hsl(0, 0%, 98%)',
          },
          popover: {
            DEFAULT: 'hsl(222.2, 84%, 4.9%)',
            foreground: 'hsl(0, 0%, 98%)',
          },
          border: 'hsl(217.2, 32.6%, 17.5%)',
          input: 'hsl(217.2, 32.6%, 17.5%)',
          ring: 'hsl(212.7, 26.8%, 83.9%)',
          accent: {
            DEFAULT: 'hsl(190, 70%, 60%)',
            foreground: 'hsl(222.2, 84%, 4.9%)',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp: { 
          '0%': { opacity: '0', transform: 'translateY(20px)' }, 
          '100%': { opacity: '1', transform: 'translateY(0)' } 
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
