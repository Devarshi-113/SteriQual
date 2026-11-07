/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Logo Primary: Deep Midnight Navy (#0a2b4e)
        navy: {
          50: '#f0f5fa',
          100: '#e0ecf5',
          200: '#c1d9eb',
          300: '#8dbddc',
          400: '#5299c8',
          500: '#2672a8',
          600: '#165383',
          700: '#0e3d64',
          800: '#0c3355',
          900: '#0a2b4e', // Exact Logo Navy
          950: '#05182c',
        },
        deepBlue: {
          50: '#f0f5fa',
          100: '#e0ecf5',
          200: '#c1d9eb',
          300: '#8dbddc',
          400: '#5299c8',
          500: '#2672a8',
          600: '#165383',
          700: '#0e3d64',
          800: '#0c3355',
          900: '#0a2b4e', // Aligned to Logo Navy
          950: '#05182c',
        },
        // Logo Secondary: Medical Sterility Mint / Emerald Teal (#18a692)
        teal: {
          50: '#f0faf8',
          100: '#d9f3ee',
          200: '#b5e8df',
          300: '#82d6c9',
          400: '#42bcb0',
          500: '#18a692', // Exact Logo Teal
          600: '#128777',
          700: '#106c60',
          800: '#10564e',
          900: '#114842',
          950: '#052b27',
        },
        brandTeal: {
          50: '#f0faf8',
          100: '#d9f3ee',
          200: '#b5e8df',
          300: '#82d6c9',
          400: '#42bcb0',
          500: '#18a692',
          600: '#128777',
          700: '#106c60',
          800: '#10564e',
          900: '#114842',
          950: '#052b27',
        },
        brand: {
          50: '#f0f5fa',
          100: '#e0ecf5',
          200: '#c1d9eb',
          500: '#0a2b4e',
          600: '#08223e',
          700: '#061a30',
          800: '#051526',
          900: '#030e1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      }
    },
  },
  plugins: [],
};
