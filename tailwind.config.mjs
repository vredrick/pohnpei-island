/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sand: '#F2F0E5',
        'sand-bright': '#F8F7F0',
        'sand-deep': '#E8E9DD',
        basalt: '#233E3C',
        'basalt-soft': '#4C615B',
        ochre: '#A4472E',
        'ochre-deep': '#A4472E',
        lagoon: '#365E57',
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
