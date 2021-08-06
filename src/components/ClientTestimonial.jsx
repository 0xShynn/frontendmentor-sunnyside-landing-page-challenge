import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ClientTestimonial = ({ userImage, name, job, review }) => {
  return (
    <Flex textAlign="center" direction="column" align="center" py="9">
      <Image src={userImage} borderRadius="full" boxSize="70px" mb="8" />
      <Text color="neutral.blue.200" fontSize="md" lineHeight="taller" mb="6">
        {review}
      </Text>
      <Heading as="h3" fontSize="lg" mb="2">
        {name}
      </Heading>
      <Heading as="h4" fontSize="sm" fontFamily="body" color="neutral.blue.400">
        {job}
      </Heading>
    </Flex>
  );
};

export default ClientTestimonial;
