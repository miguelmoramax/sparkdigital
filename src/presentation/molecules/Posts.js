import React, { useState } from 'react';
import Comments from './Comments';
import Loading from '../atoms/Loading';
import { Flex, Box, Text } from '@chakra-ui/react';
import usePostData from '../../utils/index';

const Posts = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [show, setShow] = useState({
    show: false,
    id: null,
  });
  const [id, setId] = useState(0);
  const [{ data, loading, isError }] = usePostData(url);

  const handleClick = (e, id) => {
    e.stopPropagation();
    setId(id);
    setShow({ [id]: !show[id] });
  };
  return (
    <React.Fragment>
      {isError && <div> Ups... something went wrong</div>}
      {!loading ? (
        <Loading />
      ) : (
        data.map((item) => (
          <Flex p={[2, 4, 6, 8]} key={item.id}>
            <Box onClick={(evt) => handleClick(evt, item.id)}>
              <Text fontSize='2xl'>Posts</Text>
              <div>{item.title} </div>
              <div>{item.body} </div>
              {show[item.id] && <Comments a={id} />}
            </Box>
          </Flex>
        ))
      )}
    </React.Fragment>
  );
};

export default Posts;
