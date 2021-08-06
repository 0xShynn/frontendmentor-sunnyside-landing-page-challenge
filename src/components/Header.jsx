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
import { Links } from '../utils/Links';
import SunnySideLogo from '../assets/svg/SunnySideLogo';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLink = ({ children }) => (
    <Link
      href="#"
      textAlign="center"
      color="neutral.blue.300"
      fontWeight="bold"
      onClick={isOpen ? onClose : onOpen}
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

        <HStack as={'nav'} spacing={8} display={{ base: 'none', md: 'flex' }}>
          {Links.map(link => (
            <Link key={link + Math.random()} color={'white'}>
              {link}
            </Link>
          ))}
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
              w={['full', '80']}
            >
              <VStack as="nav" spacing="6" bg="white">
                {Links.map(link => (
                  <NavLink key={link + Math.random()}>{link}</NavLink>
                ))}
              </VStack>
            </Box>
          </Flex>
        </Fade>
      ) : null}
    </Box>
  );
};

export default Header;
