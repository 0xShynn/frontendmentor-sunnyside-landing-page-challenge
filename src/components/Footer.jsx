import { Flex, HStack, Link, Icon } from '@chakra-ui/react';
import React from 'react';
import SunnySideLogo from '../assets/svg/SunnySideLogo';
import { NavLinks } from '../utils/NavLinks';
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
      role="contentinfo"
    >
      <Link w="160px" href="#" mb="10" aria-label="Sunnyside logo">
        <SunnySideLogo color="#2D7565" />
      </Link>

      <HStack spacing="12" as="nav">
        {NavLinks.map(link => (
          <Link
            color="primary.sunnyGreen.200"
            _hover={{ color: 'white' }}
            key={link + Math.random()}
            href="#"
          >
            {link}
          </Link>
        ))}
      </HStack>

      <HStack spacing="6" mt="20" flexWrap="wrap">
        <Link href="#">
          <Icon
            as={IoLogoFacebook}
            boxSize="6"
            color="primary.sunnyGreen.300"
            _hover={{ color: 'white' }}
            role="link"
            aria-label="Facebook logo"
          />
        </Link>
        <Link href="#">
          <Icon
            as={IoLogoInstagram}
            boxSize="6"
            color="primary.sunnyGreen.300"
            _hover={{ color: 'white' }}
            role="link"
            aria-label="Instagram logo"
          />
        </Link>
        <Link href="#">
          <Icon
            as={IoLogoTwitter}
            boxSize="6"
            color="primary.sunnyGreen.300"
            _hover={{ color: 'white' }}
            role="link"
            aria-label="Twitter logo"
          />
        </Link>
        <Link href="#">
          <Icon
            as={IoLogoPinterest}
            boxSize="6"
            color="primary.sunnyGreen.300"
            _hover={{ color: 'white' }}
            role="link"
            aria-label="Pinteresst logo"
          />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Footer;
