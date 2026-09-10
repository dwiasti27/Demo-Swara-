/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030303',
          900: '#070707',
          850: '#0c0c0e',
          800: '#121316',
        },
        cyan: {
          glow: '#00D2FF',
          neon: '#38BDF8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widestx: '0.25em',
        editorial: '0.2em',
      },
      boxShadow: {
        'cyan-glow': '0 0 20px -3px rgba(0, 210, 255, 0.35)',
        'cyan-glow-lg': '0 0 30px -5px rgba(0, 210, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
