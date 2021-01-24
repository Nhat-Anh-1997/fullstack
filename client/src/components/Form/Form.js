import React from 'react';
import { useState } from 'react';
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux';
const Form = (props) => {
  const [posts, setPosts] = useState({ title: '' });
  const addPost = () => {
    props.onAddPost(posts);
  };
  return (
    <div>
      <form>
        <input  onChange={(e) => setPosts({ title: e.target.value })} />
        <button onClick={addPost}>Submit</button>
      </form>
    </div>
  );
};



const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (newPost) => dispatch(actionCreators.addPost(newPost)),
  };
};
export default connect(null, mapDispatchToProps)(Form);
