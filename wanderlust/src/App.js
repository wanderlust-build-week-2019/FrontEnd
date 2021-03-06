import React from 'react';
import './App.css';

import Home from '../src/components/Home';
import Creation from '../src/components/Creation';
import AddTourPage from '../src/components/AddTourPage';
import Login from '../src/components/Login';
import Authenticate from './components/Authenticate';
import SearchBar from './components/SearchBar';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Creation" component={Creation} />
        <Route exact path="/AddTourPage" component={AddTourPage} />
        <Route exact path="/Login" component={Login} />
        <Route protected exact path="/SearchBar" component={SearchBar} />
      </Switch>
    </div>
  );
}

const ConditionalView = Authenticate(SearchBar)(Login);

export default App;
