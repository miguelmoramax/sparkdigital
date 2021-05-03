import React from 'react';
import Posts from '../molecules/Posts';
import { Grid, Box } from '@chakra-ui/react';

const PostsPage = () => {
  return (
    <React.Fragment>
      <Grid pt={2} templateColumns='5fr 1fr' columnGap='3'>
        <Box bg='lightGrey' p={[2, 4, 6, 8]}>
          <Posts />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default PostsPage;
