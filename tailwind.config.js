/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      // Override the default sans font stack
      sans: ['Montserrat', '-apple-system', 'system-ui', 'sans-serif'],
      // Keep your inter definition
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-225%))' } // Adjusted translateX
        }
      }
    }
  },
  plugins: [],
}