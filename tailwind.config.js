/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        ps2p: ['"Press Start 2P"', 'Arial', 'sans-serif'],
        ub: ['"Undertale Battle"', 'sans-serif'],
        lr90: ['LoRes9OTWide', 'sans-serif']
      },
      colors: {
        gold: '#FFC700',
      },
      backgroundImage: {
        'toast-bg': "url('/assets/img/Toast/banner.png')",
      },
    },
  },
  plugins: [],
}
