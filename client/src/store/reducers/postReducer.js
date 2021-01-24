import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';
const initialState = {
  posts: [],
  loading: false,
};

const startPost = (state, action) => {
  return updateObject(state, { loading: true });
};
const successPost = (state, action) => {
  return updateObject(state, { posts: action.posts, loading: false });
};
const failedPost = (state, action) => {
  return updateObject(state, { loading: false });
};

const addPost = (state, action) => {
  return updateObject(state, { posts: state.posts.concat(action.newPost) });
};

const removePost = (state, action) => {
  return updateObject(state, {
    posts: state.posts.filter(post=> post._id !== action.id),
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_POST:
      return startPost(state, action);
    case actionTypes.SUCCESS_POST:
      return successPost(state, action);
    case actionTypes.FAIL_POST:
      return failedPost(state, action);
    case actionTypes.ADD_POST:
      return addPost(state, action);
    case actionTypes.DELETE_POST:
      return removePost(state, action);

    default:
      return state;
  }
};
export default reducer;
