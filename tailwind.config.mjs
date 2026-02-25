/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ivory:  '#FAF8F5',
        forest: '#2C3E2D',
        sage:   '#7A9E7E',
        gold:   '#C4A35A',
        warm:   '#6B5B4E',
      },
      fontFamily: {
        serif: ['Open Sans', 'system-ui', 'sans-serif'],
        sans:  ['Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
