/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050d1f',
          900: '#0a1730',
          800: '#10224a',
          700: '#17316a',
        },
        teal: {
          soft: '#5eead4',
          mid: '#2dd4bf',
          deep: '#0f9d8f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(45, 212, 191, 0.35)',
        card: '0 10px 40px -15px rgba(10, 23, 48, 0.25)',
      },
    },
  },
  plugins: [],
}
