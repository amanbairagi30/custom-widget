/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'widget-',
  corePlugins: {
    preflight: false,
  },
  important: '#widget-root',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

