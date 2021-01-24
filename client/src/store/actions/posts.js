import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';
import * as api from '../../api/index';

const startPost = () => {
  return {
    type: actionTypes.START_POST,
  };
};
const successPost = (posts) => {
  return {
    type: actionTypes.SUCCESS_POST,
    posts: posts,
  };
};
const failPost = (error) => {
  return {
    type: actionTypes.FAIL_POST,
    error: error,
  };
};

export const addPost = (newPost) => {
  api.createPost(newPost);
  return {
    type: actionTypes.ADD_POST,
    newPost: newPost,
  };
};

export const removePost =  (id) => {
   api.deletePost(id);
  return {
    type: actionTypes.DELETE_POST,
    id:id
  };
};

export const initPost = () => {
  return (dispatch) => {
    dispatch(startPost());
    axios
      .get('http://localhost:5000/posts')
      .then((res) => {
        dispatch(successPost(res.data));
      })
      .catch((error) => {
        dispatch(failPost(error));
      });
  };
};
