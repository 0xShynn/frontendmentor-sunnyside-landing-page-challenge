import { Icon, Link } from '@chakra-ui/react';
import React from 'react';

const IconSocial = ({ iconName, url, label }) => {
  return (
    <Link href={url}>
      <Icon
        as={iconName}
        boxSize="6"
        color="primary.sunnyGreen.300"
        _hover={{ color: 'white' }}
        role="link"
        aria-label={label}
      />
    </Link>
  );
};

export default IconSocial;
