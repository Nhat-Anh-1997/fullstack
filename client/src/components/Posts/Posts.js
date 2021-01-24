import React, { useEffect } from 'react';
import Post from './Post/Post';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Posts.module.css';

const Posts = (props) => {
  useEffect(() => {
    props.onInitPost();
  },[]);

 
  



  let posts = props.posts.map((list) => {
    return (
      <Post
        key={list._id}
        title={list.title}
      ></Post>
    );
  });

  if (props.loading) {
    posts = <Spinner></Spinner>;
  }

  return <div className={classes.posts}>{posts} </div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
    loading: state.post.loading,
  };
};

const mapDispatchToProps =  (dispatch) => {
  return {
    onInitPost: () => dispatch(actionCreators.initPost()),
    onRemovePost: (id) => dispatch(actionCreators.removePost(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
