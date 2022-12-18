/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: 'var(--pixel-font)',
        spaceGrotesk: 'var(--space-grotesk-font)',
      },
    },
  },
  plugins: [],
}
