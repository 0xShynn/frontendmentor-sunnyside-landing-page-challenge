import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Panel = ({ title, description, url }) => {
  return (
    <Flex
      bg="white"
      w="full"
      direction="column"
      justifyContent="center"
      align="center"
    >
      <Box
        maxW="500px"
        p="64"
        textAlign={{ base: 'center', lg: 'left' }}
        py={{ base: '16', lg: '40' }}
        px="6"
      >
        <Heading
          mb="6"
          fontSize={{ base: '3xl', lg: '4xl' }}
          fontWeight="black"
          maxW={{ base: null, lg: '300px' }}
          // px={{ base: '8px', lg: '0' }}
        >
          {title}
        </Heading>
        <Text
          color="neutral.blue.300"
          mb="10"
          lineHeight="tall"
          // px={{ base: '8px', lg: '0' }}
        >
          {description}
        </Text>
        <Link href={url}>Learn more</Link>
      </Box>
    </Flex>
  );
};

export default Panel;
