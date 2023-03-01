/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'background':    '#FAFAFA',
        'base-card':     '#F3F2F2',
        'base-input':    '#EDEDED',
        'base-button':   '#E6E5E5',
        'base-hover':    '#D7D5D5',
        'base-label':    '#8D8686',
        'base-text':     '#574F4D',
        'base-subtitle': '#403937',
        'base-title':    '#272221',

        'purple-light':  '#EBE5F9',
        'purple':        '#8047F8',
        'purple-dark':   '#4B2995',

        'yellow-light':  '#F1E9C9',
        'yellow':        '#DBAC2C',
        'yellow-dark':   '#C47F17',
        'yellow-hover':   '#F0DD95',

      },
      gridTemplateColumns:{
        '10' : 'repeat(2, min'
      },
      borderRadius:{
        'card' : '6px 32px 6px 32px'
      }
     
    },
    fontFamily:{
      'Roboto' : ['Roboto' , 'sans-serif'],
      'Baloo' : ['"Baloo 2"' , 'cursive']
    },
   
  },
  plugins: [],
}
