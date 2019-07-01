import {FETCH_POST, FETCH_POSTS, DISMISS_POST, SELECT_POST, DISMISS_ALL} from '../actions/types';

export default (state=[], action) => {
  let newState;
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POST:
      return {...state, [action.payload.id]: action.payload};
    case SELECT_POST:
      newState = state.map(post => {return post.data.id === action.payload ? {...post, data: {...post.data, visited: true}} : post});
      return newState;
    case DISMISS_POST:
      newState = state.filter((post) => {
        return post.data.id !== action.payload
      });
      return newState;
    case DISMISS_ALL:
      return [];
    default:
      return state;
  }
}