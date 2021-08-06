import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const PanelVisual = ({ title, imageMobile, imageDesktop, text }) => {
  return (
    <Flex
      bgImage={{ base: imageMobile, sm: imageDesktop }}
      bgPos="top"
      bgSize="cover"
      h={{ base: '600px', sm: '600px', '2xl': '700px' }}
      align="flex-end"
      justify="center"
      px="6"
      py="14"
      textAlign="center"
      w="full"
    >
      <Box maxW="340px">
        <Heading
          color={
            title === 'Photography'
              ? 'primary.sunnyBlue.100'
              : 'primary.sunnyGreen.400'
          }
          as="h3"
          fontSize="3xl"
          mb="6"
        >
          {title}
        </Heading>
        <Text
          color={
            title === 'Photography'
              ? 'primary.sunnyBlue.100'
              : 'primary.sunnyGreen.300'
          }
          fontSize="md"
          lineHeight="tall"
        >
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

export default PanelVisual;
