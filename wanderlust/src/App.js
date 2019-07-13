import React from 'react';
import './App.css';

import Home from '../src/components/Home';
import TGCreation from '../src/components/TG-creation';
import RegCreation from '../src/components/Reg-creation';
import TourPage from '../src/components/TourPage';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/guide-creation" component={TGCreation} />
        <Route exact path="/Experiencer-creation" component={RegCreation} />
        <Route exact path="/TourPage" component={TourPage} />
      </Switch>
    </div>
  );
}

export default App;
