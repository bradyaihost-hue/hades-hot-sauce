import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hades: {
          black: '#0a0a0a',
          dark: '#111111',
          card: '#161616',
          red: '#c4302b',
          orange: '#e85d26',
          gold: '#d4a853',
          ember: '#ff6b35',
        },
      },
      fontFamily: {
        display: ['Oxanium', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'ember-float': 'emberFloat 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        emberFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-8px) scale(1.1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(196, 48, 43, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(196, 48, 43, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
