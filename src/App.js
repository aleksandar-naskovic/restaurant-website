import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Menu from './pages/Menu'
import Dish from './pages/Meals'
import Data from './Data'




function App() {
  return (
    <div>
      <Data>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu/dish" component={Dish} />
      </Switch>
      </Data>
    </div>
  );
}

export default App;
