import { Box } from '@chakra-ui/react';
import React from 'react';

const PanelFullImage = ({ imageMobile, imageDesktop }) => {
  return (
    <Box
      bgImage={{ base: imageMobile, lg: imageDesktop }}
      minH={{ base: '300px', sm: '450px' }}
      bgPos="center"
      bgSize="cover"
      w="full"
    />
  );
};

export default PanelFullImage;
