import React, { useEffect, useState } from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import * as api from './api/index';

const App = () => {
  const [listPost, setListPost] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const res = await api.fetchPost();
      const data = await res.data;
      setListPost(data);
    }
    fetchPost();
  }, []);
  console.log(listPost);


  return (
    <div>
      <h1>APP</h1>
      {listPost.map((list, index) => {
        return <div key={index}>{list.title}</div>;
      })}
      <Posts />
      <Form />
    </div>
  );
};
export default App;
