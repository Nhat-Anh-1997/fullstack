import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
const Auth = (props) => {
  const [auth, setAuth] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const submitSignUp = (event) => {
    event.preventDefault();
    props.onSignup(auth.email, auth.password, auth.confirmPassword);
  };

  const submitLogIn = (event) => {
    event.preventDefault();
    props.onLogin(auth.email, auth.password);
  };

  const logout = () => props.onLogout();

  let form = (
    <div>
      <form>
        <input
          type='email'
          placeholder='Enter Your Email'
          onChange={(e) =>
            setAuth({
              email: e.target.value,
              password: auth.password,
              confirmPassword: auth.confirmPassword,
            })
          }
        />
        <input
          type='password'
          placeholder='Enter Your Password'
          onChange={(e) =>
            setAuth({
              email: auth.email,
              password: e.target.value,
              confirmPassword: auth.confirmPassword,
            })
          }
        />
        <input
          type='password'
          placeholder='Enter Your ConFirmPassword'
          onChange={(e) =>
            setAuth({
              email: auth.email,
              password: e.target.value,
              confirmPassword: e.target.value,
            })
          }
        />
      </form>
      <button onClick={submitSignUp}>SUBMIT SIGNUP</button>
      <button onClick={submitLogIn}>SUBMIT LOGIN</button>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
  let errorMessage = null;
  if (props.error) {
    errorMessage = <p> {props.error.message} </p>;
  }

  return (
    <div>
      {form}

      {errorMessage}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (email, password, confirmPassword) =>
      dispatch(actionCreators.signup(email, password, confirmPassword)),
    onLogin: (email, password) =>
      dispatch(actionCreators.login(email, password)),
    onLogout: () => dispatch(actionCreators.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
