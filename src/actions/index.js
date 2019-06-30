import {FETCH_POST, FETCH_POSTS, SELECT_POST, DISMISS_POST} from './types';
import posts from '../apis/posts';

export const fetchPosts = () => async dispatch => {
  const response = await posts.get('/top/.json?limit=50');
 
  dispatch(
    {
      type: FETCH_POSTS, 
      payload: response.data.data.children
    });
 }

 export const selectPost = (id) => {
   return {
      type: SELECT_POST, 
      payload: id
    }
 }

 export const dismissPost = (id) => {
   return {
     type: DISMISS_POST,
     payload: id
   }
 }


export const fetchPost = (id) => {
  const request = posts.get(`posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}