import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import Register from './components/Register'
import Login from './components/Login'
import Page from './components/PostsPage'
import Authenticate from './components/Authenticate'
import SearchBar from './components/SearchBar'
import PostsPage from './components/PostsPage'

function App() {
  return (
    <div className="App">
      <Route path = '/search' component = {SearchBar} exact/>
      <Route path = '/register' component = {Register} exact/>

      <h1 className ='headline'>WANDERLUST</h1>
      <img src = 'http://media4.picsearch.com/is?l5ZhLDv7SHBjZi5gBCok_Uiv1CZihXh5LiWcKrGXG_0&height=255'></img>
        <Login/>
      {/* <SearchBar/> */}
      {/* <PostsPage/> */}
         <nav>
        <a>Home  </a>
        <a>Login</a>

      </nav>
        
          
    </div>
  );
}
const ConditionalView = Authenticate(SearchBar)(Login);

export default App;
