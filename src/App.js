import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import PostsPage from './presentation/index'
import store from './store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Box maxWidth='8xl' margin='auto' p={5}>
          <PostsPage />
        </Box>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
