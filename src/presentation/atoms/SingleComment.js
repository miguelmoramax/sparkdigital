import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';

const SingleComment = ({ props }) => {
  const { name, email, body } = props;
  return (
    <React.Fragment>
      <Grid
        h='150px'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={1}
      >
        <GridItem rowSpan={3} colSpan={1}>
          <Box p='4'>
            <Avatar size='lg' name={name} />
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <Text color={'blue.600'}>{name}</Text>
          <Text color={'blue.300'} fontStyle='italic' fontSize='14px'>
            {email}
          </Text>
          <Divider orientation='horizontal' />
        </GridItem>
        <GridItem colSpan={3}>
          <Text fontStyle='italic'>{body}</Text>
        </GridItem>
      </Grid>
    </React.Fragment>
  );
};

export default SingleComment;
