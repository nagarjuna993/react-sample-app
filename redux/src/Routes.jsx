import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, About, Contact } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
