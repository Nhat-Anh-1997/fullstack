import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
const Auth = (props) => {
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  });

  const [isSignUp, setIsSignUp] = useState(true);
  const switchAuthModeHandler = () => {
    setIsSignUp((pre) => !pre);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(auth.email, auth.password, isSignUp);
  };

  let form = (
    <div>
      <form>
        <input
          type='email'
          placeholder='Enter Your Email'
          onChange={(e) =>
            setAuth({ email: e.target.value, password: auth.password })
          }
        />
        <input
          type='password'
          placeholder='Enter Your Password'
          onChange={(e) =>
            setAuth({ email: auth.email, password: e.target.value })
          }
        />
      </form>
      <button onClick={submitHandler}>SUBMIT</button>
      <button onClick={switchAuthModeHandler}>
        {isSignUp ? 'SignUp' : 'LOGIN'}
      </button>
    </div>
  );
  let errorMessage = null;
  if (props.error) {
    errorMessage = <p> already exist </p>;
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
    onAuth: (email, password, isSignUp) =>
      dispatch(actionCreators.auth(email, password, isSignUp)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
