import React from 'react';
import { useSelector } from 'react-redux';
import { Text, Grid, Box } from '@chakra-ui/react';
import AddComment from './AddComment';
import Loading from '../atoms/Loading';
import SingleComment from '../atoms/SingleComment';
import usePostData from '../../utils/index';

const Comments = (a) => {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  const [{ data, loading, isError }] = usePostData(url);
  const newComments = useSelector((state) => state.comments);
  
  return (
    <Grid pt={4} templateColumns='12fr 1fr' columnGap='1'>
      <Box bg='#F7FAFC' p={[2, 4, 6, 8]}>
        <Text fontSize='2xl'>Comments</Text>
        {isError && <div>Ups...something went wrong</div>}
        {!loading && <Loading />}
        <AddComment />
        {newComments.map((item) => (
          <SingleComment key={item.id} props={item} />
        ))}
        {data
          .filter((c) => c.postId === a.a)
          .map((item) => (
            <SingleComment key={item.id} props={item} />
          ))}
      </Box>
    </Grid>
  );
};

export default Comments;
