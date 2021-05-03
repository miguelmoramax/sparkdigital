import {
  ADD_COMMENT,
} from './commentActionsTypes';

export const addComment = (comments) => ({
  type: ADD_COMMENT,
  payload: comments,
});