import React from 'react';
import './App.css';

import Home from '../src/components/Home';
import Creation from '../src/components/Creation';
import TourPage from '../src/components/TourPage';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Creation" component={Creation} />
        <Route exact path="/TourPage" component={TourPage} />
      </Switch>
    </div>
  );
}

export default App;
