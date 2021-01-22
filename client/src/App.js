import React, { useEffect } from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import * as actionCreators from './store/actions/index';
import { connect } from 'react-redux';
import axios from 'axios';
import Spinner from './components/UI/Spinner/Spinner';
import Auth from './components/Auth/Auth';

const App = (props) => {
  useEffect(() => {
    props.onInitPost();
  }, []);

  const posts = props.posts.map((list) => {
    return (
      <div key={list._id}>
        <p>{list.title}</p>
      </div>
    );
  });

  let app = (
    <div>
      <Auth />

      <Posts />
      {posts}
      <Form />
    </div>
  );
  if (props.loading) {
    app = <Spinner />;
  }

  return <div>{app}</div>;
};
const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
    loading: state.post.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitPost: () => dispatch(actionCreators.initPost()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App, axios);
