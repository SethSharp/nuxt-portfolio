import { preset } from '@sethsharp/lumuix'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],

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
    },
  },
  plugins: [],
}

