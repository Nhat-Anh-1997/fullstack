import * as actionTypes from '../actions/actionTypes';
import  updateObject  from '../utility';
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
  return updateObject(state, { loading: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_POST:
      return startPost(state, action);
    case actionTypes.SUCCESS_POST:
      return successPost(state, action);
    case actionTypes.FAIL_POST:
      return failedPost(state, action);
    default:
      return state;
  }
};
export default reducer;
