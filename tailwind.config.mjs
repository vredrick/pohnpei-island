/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sand: '#F4E9D4',
        'sand-bright': '#FFF8F1',
        'sand-deep': '#ECE1CD',
        basalt: '#2A1F18',
        'basalt-soft': '#52443C',
        ochre: '#B8642B',
        'ochre-deep': '#8F4C1E',
        lagoon: '#186969',
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '9999px',
      },
      fontFamily: {
        headline: ['Newsreader', 'Georgia', 'serif'],
        body: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
        label: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
