import React from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Fade,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { NavLinks } from '../utils/NavLinks';
import SunnySideLogo from '../assets/svg/SunnySideLogo';
import ContactButton from './ContactButton';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLink = ({ children }) => (
    <Link
      href="#"
      textAlign="center"
      color="neutral.blue.300"
      fontWeight="bold"
      onClick={isOpen ? onClose : onOpen}
      _hover={{
        textDecoration: 'none',
        color: 'neutral.blue.100',
      }}
    >
      {children}
    </Link>
  );

  return (
    <Box
      pos={{ base: 'fixed', md: 'inherit' }}
      top="0"
      w="100%"
      zIndex="dropdown"
      role="banner"
    >
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        bg={'primary.blue'}
        px={{ base: 4, md: 8, lg: 10 }}
        py={{ base: 4, md: 8, lg: 10 }}
      >
        <Link w={{ base: '130px', md: '170px' }} href="#">
          <SunnySideLogo color="white" />
        </Link>

        <HStack as={'nav'} spacing={2} display={{ base: 'none', md: 'flex' }}>
          {NavLinks.map(link => (
            <Link
              href="#"
              key={link + Math.random()}
              color={'white'}
              bg="none"
              px="6"
              py="2"
              transition="background-color .3s"
              borderRadius="3xl"
              _hover={{ textDecoration: 'none', bg: 'rgba(255, 255, 255, .3)' }}
            >
              {link}
            </Link>
          ))}
          <ContactButton title="Contact" url="#" />,
        </HStack>

        <IconButton
          size={'lg'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          colorScheme={'whiteAlpha'}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen ? (
        <Fade in={isOpen} offsetY={'20px'}>
          <Box
            bg="rgba(0,0,0, 0.3)"
            h="100vh"
            display={{ base: 'flex', md: 'none' }}
            w="full"
            onClick={isOpen ? onClose : onOpen}
            justifyContent="flex-end"
          >
            <Flex direction={'column'} align={'flex-end'} mx="4">
              <Box
                w="25px"
                h="25px"
                bgGradient="linear(to-br, transparent 0%, transparent 50%, white 50%, white 100%)"
                display={{ md: 'none' }}
              />
              <Box
                bg={'white'}
                p={10}
                display={{ md: 'none' }}
                w={['72', '80']}
                boxShadow="2xl"
              >
                <VStack as="nav" spacing="6">
                  {NavLinks.map(link => (
                    <NavLink key={link + Math.random()}>{link}</NavLink>
                  ))}
                  <ContactButton
                    title="Contact"
                    url="#"
                    onClick={isOpen ? onClose : onOpen}
                  />
                </VStack>
              </Box>
            </Flex>
          </Box>
        </Fade>
      ) : null}
    </Box>
  );
};

export default Header;
