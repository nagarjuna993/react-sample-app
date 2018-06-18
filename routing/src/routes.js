import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Basic from './containers/Basic'
import Counter from './containers/Counter'
import Rest from './containers/Rest'

const Routes = () => {
  return (
    <Switch>
    <Route path="/" exact component={Basic}></Route>
    <Route path="/counter" exact component={Counter}></Route>
    <Route path="/rest" exact component={Rest}></Route>
  </Switch>
  )
}

export default Routes;