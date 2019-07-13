import React from 'react';
import './App.css';

import Home from '../src/componenets/Home';
import TGCreation from '../src/componenets/TG-creation';
import RegCreation from '../src/componenets/Reg-creation';
import TourPage from '../src/componenets/TourPage';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route
          exact
          path="/Tourguide-account-creation"
          component={TGCreation}
        />
        <Route
          exact
          path="/Experiencer-account-creation"
          component={RegCreation}
        />
        <Route exact path="/TourPage" component={TourPage} />
      </Switch>
      <Home />
    </div>
  );
}

export default App;
