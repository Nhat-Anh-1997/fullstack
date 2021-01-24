import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const startAuth = (state, action) => {
  return updateObject(state, { loading: true, error: null });
};

const successAuth = (state, action) => {
  return updateObject(state, {
    token: action.token,
    loading: false,
    error: null,
  });
};
const failAuth = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const logout = (state, action) =>{
  return updateObject(state,{token:null})
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_AUTH:
      return startAuth(state, action);
    case actionTypes.SUCCESS_AUTH:
      return successAuth(state, action);
    case actionTypes.FAIL_AUTH:
      return failAuth(state, action);
    case actionTypes.LOGOUT:
      return logout(state,action);

    default:
      return state;
  }
};
export default reducer;
