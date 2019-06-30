import {SELECT_POST} from '../actions/types';

export default (state='', action) => {
  switch (action.type) {
    case SELECT_POST:
      return action.payload;
    default:
      return state;
  }
}

// Selector
export const getPostSelector = (state) => {
  const postFound = state.posts.find((post) => {
    return post.data.id === state.selectedPostId});

  return postFound ? postFound.data: null;
};