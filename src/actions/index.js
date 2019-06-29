import {FETCH_POST, FETCH_POSTS} from './types';
import posts from '../apis/posts';

export const fetchPosts = () => async dispatch => {
 const response = await posts.get('/posts');

 dispatch({type: FETCH_POSTS, payload: response.data});
}

export const fetchPost = (id) => async dispatch => {
  const response = await posts.get(`posts/${id}`);

  dispatch({type: FETCH_POST, payload: response.data});
}