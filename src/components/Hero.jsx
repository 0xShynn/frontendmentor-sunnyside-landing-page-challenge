import { Flex, Image, keyframes, Text } from '@chakra-ui/react';
import React from 'react';
import imageHeaderMobile from '../assets/images/mobile/image-header.jpg';
import imageHeaderDesktop from '../assets/images/desktop/image-header.jpg';
import arrow from '../assets/svg/icon-arrow-down.svg';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100%{
    transform: translateY(0);
  }
  40%{
    transform: translateY(-20px);
  }
  60%{
    transform: : translateY(-15px);
  }
`;

const Hero = () => {
  return (
    <Flex
      bgImage={{ base: imageHeaderMobile, md: imageHeaderDesktop }}
      bgPosition="bottom"
      bgRepeat="no-repeat"
      bgSize="cover"
      height={{
        base: '500px',
        sm: '600px',
        md: '600px',
        lg: '600px',
        xl: '750px',
      }}
      pt={{ base: '140px', md: '40px' }}
      flexDirection="column"
      align="center"
    >
      <Text
        textAlign="center"
        fontFamily="heading"
        textTransform="uppercase"
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        px={{ base: '6' }}
        letterSpacing="widest"
        color="white"
      >
        We are creatives
      </Text>
      <Image
        src={arrow}
        width="30px"
        mt="16"
        animation={`${bounce} 3s infinite`}
      />
    </Flex>
  );
};

export default Hero;
