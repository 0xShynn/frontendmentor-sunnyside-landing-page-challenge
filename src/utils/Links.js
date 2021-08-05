import { Button } from '@chakra-ui/react';

export const Links = [
  'About',
  'Services',
  'Projects',
  <Button
    size="lg"
    rounded="3xl"
    px="8"
    bg={{ base: 'primary.yellow', md: 'white' }}
    fontFamily="heading"
    color="black"
    textDecoration="none"
    _hover={{ textDecoration: 'none' }}
  >
    Contact
  </Button>,
];
