/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F0F7EE',
        parchment: '#E8F3E6',
        lavender: '#E6E0F0',
        'lavender-dark': '#D4C9E8',
        'lavender-light': '#F2EEFA',
        sage: '#A8D5A2',
        'sage-dark': '#7CB87A',
        'sage-light': '#C5E8C0',
        mint: '#B8E0B0',
        'mint-dark': '#8FC98A',
        'mint-light': '#D4F0CF',
        violet: '#C4B8E0',
        'violet-dark': '#A394C4',
        'violet-light': '#DDD6EE',
        peach: '#F5D6C6',
        'peach-dark': '#E8BFA8',
        'peach-light': '#FAE8DC',
        brown: '#4A4A5A',
        'brown-mid': '#6B6B7A',
        ink: '#2A2A3A',
      },
      fontFamily: {
        display: ['"Abril Fatface"', 'serif'],
        groovy: ['"Permanent Marker"', 'cursive'],
        body: ['Lato', 'sans-serif'],
        typewriter: ['"Special Elite"', 'cursive'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
