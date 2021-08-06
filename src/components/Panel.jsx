import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Panel = ({ title, description, url, urlColor }) => {
  return (
    <Flex
      bg="white"
      w="full"
      direction="column"
      justifyContent="center"
      align="center"
    >
      <Box
        maxW="500px"
        p="64"
        textAlign={{ base: 'center', lg: 'left' }}
        py={{ base: '16', lg: '40' }}
        px="6"
      >
        <Heading
          mb="6"
          fontSize={{ base: '3xl', lg: '4xl' }}
          fontWeight="black"
          color="neutral.blue.100"
          maxW={{ base: null, lg: '300px' }}
          // px={{ base: '8px', lg: '0' }}
        >
          {title}
        </Heading>

        <Text
          color="neutral.blue.300"
          mb="10"
          lineHeight="tall"
          // px={{ base: '8px', lg: '0' }}
        >
          {description}
        </Text>

        <Link
          pos="relative"
          zIndex="base"
          fontFamily="heading"
          fontSize="md"
          textTransform="uppercase"
          textDecorationStyle="dotted"
          className="url"
          color="neutral.blue.100"
          href={url}
        >
          <Box
            sx={{
              '.url:hover &': {
                bg: urlColor,
                opacity: '1',
              },
              opacity: '.4',
            }}
            w="110%"
            h="10px"
            bg={urlColor}
            pos="absolute"
            zIndex="hide"
            bottom="-3px"
            left="-5%"
            borderRadius="lg"
          />
          Learn More
        </Link>
      </Box>
    </Flex>
  );
};

export default Panel;
