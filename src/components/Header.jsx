import React from 'react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Fade,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { ReactComponent as SunnySideLogo } from '../assets/sunnyside-logo.svg';

const NavLink = ({ children }) => (
  <Link href="#" textAlign="center" color="neutral.blue.300" fontWeight="bold">
    {children}
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = [
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
    >
      Contact
    </Button>,
  ];

  return (
    <>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        bg={'primary.blue'}
        px={{ base: 4, md: 8, lg: 10 }}
        py={{ base: 10, lg: 16 }}
      >
        <Link w={{ base: '130px', md: '170px' }} href="#">
          <SunnySideLogo />
        </Link>

        <HStack as={'nav'} spacing={8} display={{ base: 'none', md: 'flex' }}>
          {Links.map(link => (
            <Link key={link} color={'white'}>
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
          <Flex
            mx={4}
            direction={'column'}
            align={'flex-end'}
            mt={'0'}
            pos={'absolute'}
            right={0}
          >
            <Box
              w="25px"
              h="25px"
              bgGradient="linear(to-br, transparent 0%, transparent 50%, white 50%, white 100%)"
            />
            <Box bg={'white'} p={10} display={{ md: 'none' }} w="64">
              <VStack as="nav" spacing="6">
                {Links.map(link => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </VStack>
            </Box>
          </Flex>
        </Fade>
      ) : null}
    </>
  );
};

export default Header;
