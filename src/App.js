import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';

import Home from './pages/Home';
import customTheme from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
