import React from 'react';
import { useState } from 'react';
import * as api from '../../api/index';

const Form = () => {
  const [posts, setPosts] = useState({ title: '' });
  const addPost = () => {
    api.createPost(posts);
  };

  return (
    <div>
      <form>
        <input onChange={(e) => setPosts({ title: e.target.value })} />
        <button onClick={addPost}>Submit</button>
      </form>
    </div>
  );
};
export default Form;
