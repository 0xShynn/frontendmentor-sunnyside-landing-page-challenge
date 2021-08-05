import { Box, Flex, HStack, Link, Icon } from '@chakra-ui/react';
import React from 'react';
import SunnySideLogo from '../assets/svg/SunnySideLogo';
import { Links } from '../utils/Links';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoInstagram,
} from 'react-icons/io';

const Footer = () => {
  return (
    <Flex
      direction="column"
      bg="primary.sunnyGreen.100"
      align="center"
      py={{ base: '16' }}
      px="10"
    >
      <Box w="160px" mb="10">
        <SunnySideLogo color="#2D7565" />
      </Box>

      <HStack spacing="12">
        {Links.slice(0, Links.length - 1).map(link => (
          <Link
            color="primary.sunnyGreen.200"
            _hover={{ color: 'white' }}
            key={link + Math.random()}
          >
            {link}
          </Link>
        ))}
      </HStack>

      <HStack spacing="6" mt="20">
        <Icon
          as={IoLogoFacebook}
          boxSize="6"
          color="primary.sunnyGreen.300"
          _hover={{ color: 'white' }}
        />
        <Icon
          as={IoLogoInstagram}
          boxSize="6"
          color="primary.sunnyGreen.300"
          _hover={{ color: 'white' }}
        />
        <Icon
          as={IoLogoTwitter}
          boxSize="6"
          color="primary.sunnyGreen.300"
          _hover={{ color: 'white' }}
        />
        <Icon
          as={IoLogoPinterest}
          boxSize="6"
          color="primary.sunnyGreen.300"
          _hover={{ color: 'white' }}
        />
      </HStack>
    </Flex>
  );
};

export default Footer;
