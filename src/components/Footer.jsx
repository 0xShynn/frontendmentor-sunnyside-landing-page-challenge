import { Flex, HStack, Link } from '@chakra-ui/react';
import React from 'react';
import SunnySideLogo from '../assets/svg/SunnySideLogo';
import { NavLinks } from '../utils/NavLinks';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoInstagram,
} from 'react-icons/io';
import IconSocial from './IconSocial';

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
        <IconSocial iconName={IoLogoFacebook} label="Pinterest logo" url="#" />
        <IconSocial iconName={IoLogoInstagram} label="Pinterest logo" url="#" />
        <IconSocial iconName={IoLogoTwitter} label="Pinterest logo" url="#" />
        <IconSocial iconName={IoLogoPinterest} label="Pinterest logo" url="#" />
      </HStack>
    </Flex>
  );
};

export default Footer;
