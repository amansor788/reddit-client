import {FETCH_POST, FETCH_POSTS} from './types';
import posts from '../apis/posts';

export const fetchPosts = () => async dispatch => {
  const response = await posts.get('/top/.json?limit=50');
 
  dispatch(
    {
      type: FETCH_POSTS, 
      payload: response.data.data.children
    });
 }

export const fetchPost = (id) => {
  const request = posts.get(`posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}