import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const AuthorBanner = () => {
  return (
    <Flex justify="center" px="4" mb={{ base: 4, md: 10, lg: 0 }}>
      <Flex
        py="6"
        px="6"
        textAlign="center"
        align="center"
        rounded="lg"
        fontSize="16px"
        bg="primary.blackpurple"
      >
        <Text color="primary.sunnyGreen.300" mt="0.5">
          Code challenge by{' '}
          <Link
            href="https://www.frontendmentor.io"
            target="_blank"
            textDecoration="underline"
            _hover={{
              textDecoration: 'underline',
              color: 'primary.sunnyGreen.400',
            }}
          >
            Frontend Mentor
          </Link>{' '}
          • Made by{' '}
          <Link
            href="https://anhek.dev"
            target="_blank"
            textDecoration="underline"
            _hover={{
              textDecoration: 'underline',
              color: 'primary.sunnyGreen.400',
            }}
          >
            Antonin Nhek
          </Link>
        </Text>
        <Link
          href="https://github.com/anhek/frontendmentor-sunnyside-landing-page-challenge"
          target="_blank"
          aria-label="Link to the Github repo of the code challenge"
          ml="4"
        >
          <Icon
            as={FaGithub}
            boxSize="8"
            color="primary.sunnyGreen.300"
            transition="0.2s"
            _hover={{ color: 'primary.sunnyGreen.400' }}
          />
        </Link>
      </Flex>
    </Flex>
  );
};

export default AuthorBanner;
