import { Button } from '@chakra-ui/react';
import React from 'react';

const ContactButton = ({ title, url, onClick }) => {
  return (
    <Button
      href={url}
      size="lg"
      rounded="3xl"
      px="8"
      bg={{ base: 'primary.yellow', md: 'rgba(255, 255, 255, 1)' }}
      fontFamily="heading"
      color="black"
      textTransform="uppercase"
      _hover={{
        textDecoration: 'none',
        bg: { base: 'primary.yellow200', md: 'rgba(255, 255, 255, .3)' },
        color: { base: 'black', md: 'white' },
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default ContactButton;
