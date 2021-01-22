import axios from 'axios';
import * as actionTypes from './actionTypes';

const startAuth = () => {
  return {
    type: actionTypes.START_AUTH,
  };
};

const successAuth = (token) => {
  return {
    type: actionTypes.SUCCESS_AUTH,
    token: token,
  };
};

const failAuth = (error) => {
  return {
    type: actionTypes.FAIL_AUTH,
    error: error,
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(startAuth());

    const authData = {
      email: email,
      password: password,
    };

    let url = 'http://localhost:5000/user/signup';
    if (!isSignUp) {
      url = 'http://localhost:5000/user/login';
    }

    axios
      .post(url, authData)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        dispatch(successAuth(res.data.token));
      })
      .catch((error) => {
        dispatch(failAuth(error));
      });
  };
};
