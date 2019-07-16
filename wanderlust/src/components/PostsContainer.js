import React from 'react';
import Post from './Place';
import { Link } from 'react-router-dom';

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      <header className="headerBar">
        <div>
          <h1 className="headerH1">WanderLust</h1>
        </div>
        <nav className="headerNav">
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
        </nav>
      </header>
      {props.posts.map(post => (
        <Post
          key={post.thumbnailUrl}
          place={post.place}
          country={post.country}
          price={post.price}
        />
      ))}
      <footer>
        <div className="left">
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
        </div>
        <div className="center">
          <div className="footerText">
            <h3 className="footerH3">WanderLust, Inc</h3>
            <h4 className="footerH40">Copyright 2019</h4>
          </div>{' '}
        </div>
        <div className="right">
          <div className="footerText">
            <Link to="/Privacy">Privacy</Link>
            <Link to="/Terms">Terms Of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PostsContainer;
