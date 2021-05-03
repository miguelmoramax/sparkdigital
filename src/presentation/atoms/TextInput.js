import React from 'react';
import { Input } from '@chakra-ui/react';

const TextInput = ({ handleInput, handleChange, title, value }) => {
  return (
    <React.Fragment>
      <span>{title}</span>
      <Input
        name={title}
        type='text'
        value={value}
        onClick={handleInput}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};

export default TextInput;
