/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./pages/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // MHXX Gaming Theme - Retro Futurism
        primary: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#5B21B6',
        },
        secondary: {
          DEFAULT: '#A78BFA',
          light: '#C4B5FD',
          dark: '#7C3AED',
        },
        accent: {
          DEFAULT: '#F43F5E',
          light: '#FB7185',
          dark: '#E11D48',
        },
        dark: {
          DEFAULT: '#0F0F23',
          50: '#1A1A2E',
          100: '#16162A',
          200: '#121226',
          300: '#0F0F23',
          400: '#0B0B1F',
          500: '#080819',
        },
        neon: {
          purple: '#7C3AED',
          pink: '#F43F5E',
          cyan: '#22D3EE',
          green: '#22C55E',
          yellow: '#FACC15',
        },
      },
      fontFamily: {
        display: ['Russo One', 'sans-serif'],
        body: ['Chakra Petch', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary.DEFAULT), 0 0 20px theme(colors.primary.DEFAULT)',
        'neon-accent': '0 0 5px theme(colors.accent.DEFAULT), 0 0 20px theme(colors.accent.DEFAULT)',
        'neon-cyan': '0 0 5px #22D3EE, 0 0 20px #22D3EE',
        'glow': '0 0 40px rgba(124, 58, 237, 0.3)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px #7C3AED, 0 0 10px #7C3AED' },
          '100%': { boxShadow: '0 0 10px #7C3AED, 0 0 40px #7C3AED, 0 0 80px #7C3AED' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
