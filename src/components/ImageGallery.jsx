import { Box, Image, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import milkBottlesMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg';
import milkBottlesDesktop from '../assets/images/desktop/image-gallery-milkbottles.jpg';

import OrangeMobile from '../assets/images/mobile/image-gallery-orange.jpg';
import OrangeDesktop from '../assets/images/desktop/image-gallery-orange.jpg';

import ConeMobile from '../assets/images/mobile/image-gallery-cone.jpg';
import ConeDesktop from '../assets/images/desktop/image-gallery-cone.jpg';

import sugarCubesMobile from '../assets/images/mobile/image-gallery-sugar-cubes.jpg';
import sugarCubesDesktop from '../assets/images/desktop/image-gallery-sugar-cubes.jpg';

const ImageGallery = () => {
  const variant = useBreakpointValue({ base: 'base', md: 'md' });

  return (
    <Box>
      <SimpleGrid columns={[2, null, 4]}>
        {variant === 'base' ? (
          <>
            <Image src={milkBottlesMobile} alt="Milk bottles" />
            <Image src={OrangeMobile} alt="Orange" />
            <Image src={ConeMobile} alt="Ice cream cone" />
            <Image src={sugarCubesMobile} alt="Sugar cubes" />
          </>
        ) : (
          <>
            <Image src={milkBottlesDesktop} alt="Milk bottles" />
            <Image src={OrangeDesktop} alt="Orange" />
            <Image src={ConeDesktop} alt="Ice cream cone" />
            <Image src={sugarCubesDesktop} alt="Sugar cubes" />
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ImageGallery;
