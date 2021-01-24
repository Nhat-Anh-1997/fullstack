import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <p className={classes.post} onClick={props.clicked}>
      {props.title}{' '}
    </p>
  );
};
export default Post;
