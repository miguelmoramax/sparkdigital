import React from 'react';
import { Skeleton } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Skeleton
      startColor='whiteAlpha.300'
      endColor='blackAlpha.500'
      height='20px'
    />
  );
};

export default Loading;
