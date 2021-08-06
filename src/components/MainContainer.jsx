import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import Panel from './Panel';
import PanelFullImage from './PanelFullImage';
import PanelVisual from './PanelVisual';

import TransformMobile from '../assets/images/mobile/image-transform.jpg';
import TransformDesktop from '../assets/images/desktop/image-transform.jpg';

import StandoutMobile from '../assets/images/mobile/image-stand-out.jpg';
import StandoutDesktop from '../assets/images/desktop/image-stand-out.jpg';

import graphicDesignMobile from '../assets/images/mobile/image-graphic-design.jpg';
import graphicDesignDesktop from '../assets/images/desktop/image-graphic-design.jpg';

import photographyMobile from '../assets/images/mobile/image-photography.jpg';
import photographyDesktop from '../assets/images/desktop/image-photography.jpg';

const MainContainer = () => {
  return (
    <Box>
      <Stack direction={{ base: 'column', md: 'row-reverse' }} spacing="0">
        <PanelFullImage
          imageMobile={TransformMobile}
          imageDesktop={TransformDesktop}
        />
        <Panel
          title="Transform your brand"
          description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          url="#"
          urlColor="primary.yellow"
        />
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} spacing="0">
        <PanelFullImage
          imageMobile={StandoutMobile}
          imageDesktop={StandoutDesktop}
        />
        <Panel
          title="Stand out to the right audience"
          description="Using a collaborative formula of designers, researchers, photographers,
        videographers and copywriters. We'll build and extend your brand in
        digital places."
          url="#"
          urlColor="primary.softRed"
        />
      </Stack>

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
