// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import React from 'react';
import '../App.css';

const Post = props => {
  return (
    <div className="post">
      <img src={props.thumbnailUrl} alt="PIC" />
      <h1>{props.place}</h1>
      <h1>{props.country}</h1>
      <h2>${props.price}</h2>
    </div>
  );
};

export default Post;
