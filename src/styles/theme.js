import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontSize: '18px',
        bg: 'primary.sunnyGreen.100',
      },
    },
  },
  fonts: {
    heading: 'Fraunces',
    body: 'Barlow',
  },
  colors: {
    primary: {
      blue: '#3EBFFF',
      softRed: 'hsl(7, 99%, 70%)',
      yellow: 'hsl(51, 100%, 49%)',
      darkBlue: 'hsl(198, 62%, 26%)',
      sunnyGreen: {
        100: '#90D4C5',
        200: '#529687',
        300: '#2D7565',
        400: 'hsl(167, 40%, 24%)',
      },
      sunnyBlue: {
        100: '#25596E',
      },
    },
    neutral: {
      'blue.100': 'hsl(212, 27%, 19%)',
      'blue.200': 'hsl(213, 9%, 39%)',
      'blue.300': 'hsl(232, 10%, 55%)',
      'blue.400': 'hsl(210, 4%, 67%)',
    },
  },
});

export default customTheme;
