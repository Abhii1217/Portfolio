/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        surface: '#000000',
        card: '#141414',
        border: '#1f1f1f',
        accent: '#e2e2e2',
        muted: '#6b6b6b',
        dim: '#3a3a3a',
      },
    },
  },
  plugins: [],
}
