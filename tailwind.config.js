import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blinking: {
          '0%': { borderRightColor: 'transparent' },
          '50%': { borderRightColor: 'white' },
          '100%': { borderRightColor: 'transparent' },
        },
      },

      animation: {
        typing: 'typing 1s steps(30, end) forwards, blinking 1s infinite',
        reveal: 'typing 0.7s steps(50, end) forwards',
      },

      colors: {
        primary: {
          50: colors.teal[50],
          100: colors.teal[100],
          200: colors.teal[200],
          300: colors.teal[300],
          400: colors.teal[400],
          500: colors.teal[500],
          600: colors.teal[600],
          700: colors.teal[700],
          800: colors.teal[800],
          900: colors.teal[900],
        },
      }
    },
  },
  plugins: [],
}

