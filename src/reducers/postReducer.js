import {FETCH_POST, FETCH_POSTS} from '../actions/types';

export default (state=[], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POST:
      return {...state, [action.payload.id]: action.payload};
    default:
      return state;
  }
}