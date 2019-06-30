import {FETCH_POST, FETCH_POSTS, DISMISS_POST} from '../actions/types';

export default (state=[], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POST:
      return {...state, [action.payload.id]: action.payload};
    case DISMISS_POST:
      const newState = state.filter((post) => {
        return post.data.id !== action.payload
      });
      return newState;
    default:
      return state;
  }
}