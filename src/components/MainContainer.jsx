import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import PanelVisual from './PanelVisual';

import graphicDesignMobile from '../assets/images/mobile/image-graphic-design.jpg';
import graphicDesignDesktop from '../assets/images/desktop/image-graphic-design.jpg';
import photographyMobile from '../assets/images/mobile/image-photography.jpg';
import photographyDesktop from '../assets/images/desktop/image-photography.jpg';

const MainContainer = () => {
  return (
    <Box>
      <Stack direction={{ base: 'column', md: 'row' }} spacing="0">
        <PanelVisual
          title="Graphic Design"
          imageMobile={graphicDesignMobile}
          imageDesktop={graphicDesignDesktop}
          text="Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention."
        />
        <PanelVisual
          title="Photography"
          imageMobile={photographyMobile}
          imageDesktop={photographyDesktop}
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </Stack>
    </Box>
  );
};

export default MainContainer;
