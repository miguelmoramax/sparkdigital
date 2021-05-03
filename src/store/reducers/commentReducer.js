import { v4 as uuidv4 } from 'uuid';

const initialState = [];
const commentReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          postId: uuidv4(),
          id: uuidv4(),
          name: payload.name,
          email: payload.email,
          body: payload.body,
        },
      ];
    default:
      return state;
  }
};

export default commentReducer;
