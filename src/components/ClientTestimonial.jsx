import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ClientTestimonial = ({ userImage, name, job, review }) => {
  return (
    <Flex
      textAlign="center"
      direction="column"
      align="center"
      py={{ base: '9', lg: '14' }}
    >
      <Box maxW="80">
        <Image
          src={userImage}
          borderRadius="full"
          boxSize="70px"
          mb={{ base: '8', lg: '14' }}
          mx="auto"
        />
        <Text
          color="neutral.blue.200"
          fontSize="md"
          lineHeight="taller"
          mb={{ base: '6', lg: '16' }}
        >
          {review}
        </Text>
        <Heading as="h3" fontSize="lg" mb="2">
          {name}
        </Heading>
        <Heading
          as="h4"
          fontSize="sm"
          fontFamily="body"
          color="neutral.blue.400"
        >
          {job}
        </Heading>
      </Box>
    </Flex>
  );
};

export default ClientTestimonial;
