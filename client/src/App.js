import React from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Auth from './components/Auth/Auth';

const App = (props) => {
  let app = (
    <div>
      <Auth />
      <Posts />
      <Form />
    </div>
  )

  return <div>{app}</div>;
};

export default App;
