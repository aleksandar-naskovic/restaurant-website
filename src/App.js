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
        <Route exact path="/restaurant-website" component={Home} />
        <Route exact path="/restaurant-website/menu" component={Menu} />
        <Route exact path="/restaurant-website/menu/dish" component={Dish} />
      </Switch>
      </Data>
    </div>
  );
}

export default App;
