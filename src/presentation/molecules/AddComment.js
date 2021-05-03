import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid, Box } from '@chakra-ui/react';
import TextInput from '../atoms/TextInput';
import { addComment } from '../../store/actions/commentActions';

const AddComment = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.stopPropagation();
  };

  const addNewComment = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    dispatch(addComment(data));
    e.stopPropagation();
  };

  return (
    <Grid pt={2} templateColumns='5fr 1fr' columnGap='3'>
      <Box p={[2, 4, 6, 8]}>
        <Box bg='#EDF2F7' p={[2, 4, 6, 8]}>
          <TextInput
            handleInput={(e) => handleInput(e)}
            title='name'
            handleChange={(e) => addNewComment(e)}
          />
          <TextInput
            handleInput={(e) => handleInput(e)}
            title='email'
            handleChange={(e) => addNewComment(e)}
          />
          <TextInput
            handleInput={(e) => handleInput(e)}
            title='body'
            handleChange={(e) => addNewComment(e)}
          />
          <Button onClick={(evt) => handleSubmit(evt)}>Add Comment</Button>
        </Box>
      </Box>
    </Grid>
  );
};
export default AddComment;
