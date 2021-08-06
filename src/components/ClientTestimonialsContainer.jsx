import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import ClientTestimonial from './ClientTestimonial';

import userEmily from '../assets/images/users/image-emily.jpg';
import userThomas from '../assets/images/users/image-thomas.jpg';
import userJennie from '../assets/images/users/image-jennie.jpg';

const ClientTestimonialsContainer = ({ children }) => {
  return (
    <Box bg="white" px="6" py="14">
      <Heading
        as="h2"
        textAlign="center"
        color="neutral.blue.400"
        textTransform="uppercase"
        fontSize="md"
        letterSpacing="widest"
        mb="8"
      >
        Client Testimonials
      </Heading>
      <VStack spacing="0">
        <ClientTestimonial
          userImage={userEmily}
          name="Emily R."
          job="Marketing Director"
          review="We put our trust in Sunnyside and they delivered, making sur our needs
        were met and deadlines were always hit."
        />
        <ClientTestimonial
          userImage={userThomas}
          name="Thomas S."
          job="Chief Oprating Officer"
          review="We put our trust in Sunnyside and they delivered, making sur our needs
        were met and deadlines were always hit."
        />
        <ClientTestimonial
          userImage={userJennie}
          name="Jenny F."
          job="Business Owner"
          review="We put our trust in Sunnyside and they delivered, making sur our needs
        were met and deadlines were always hit."
        />
      </VStack>
    </Box>
  );
};

export default ClientTestimonialsContainer;
