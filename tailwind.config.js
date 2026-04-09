/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff8ba1",
        "primary-dim": "#e2165f",
        background: "#0c0e12",
        surface: "#0c0e12",
        "surface-container": "#171a1f",
        "surface-container-high": "#1d2025",
        "surface-container-highest": "#23262c",
        "surface-container-lowest": "#000000",
        "on-background": "#f6f6fc",
        "on-surface-variant": "#aaabb0",
        "outline-variant": "#46484d",
        "secondary-container": "#802053",
        "on-secondary-container": "#ffbed7",
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
