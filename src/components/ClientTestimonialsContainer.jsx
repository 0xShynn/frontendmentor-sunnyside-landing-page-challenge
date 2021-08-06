import { Box, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import ClientTestimonial from './ClientTestimonial';

import userEmily from '../assets/images/users/image-emily.jpg';
import userThomas from '../assets/images/users/image-thomas.jpg';
import userJennie from '../assets/images/users/image-jennie.jpg';

const ClientTestimonialsContainer = ({ children }) => {
  return (
    <Box bg="white" px="6" py={{ base: '14', lg: '40' }}>
      <Heading
        as="h2"
        textAlign="center"
        color="neutral.blue.400"
        textTransform="uppercase"
        fontSize={{ base: 'md', lg: 'xl' }}
        letterSpacing="widest"
        mb={{ base: '8', lg: '0' }}
      >
        Client Testimonials
      </Heading>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing="0"
        justifyContent="center"
      >
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
      </Stack>
    </Box>
  );
};

export default ClientTestimonialsContainer;
