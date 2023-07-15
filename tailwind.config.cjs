module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif']
    },
    extend: {
      keyframes: {
        'fadein': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        'fadein': 'fadein 0.3s both',
      },
    },
    colors: {
      theme: '#6CEEC7',
      white: '#fff',
      transparent: 'transparent',
      blackTransparent: 'rgba(0,0,0,0.40)',
      error: '#DA5050',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries')
  ]
}
