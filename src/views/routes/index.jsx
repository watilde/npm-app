import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/pages/Home'

const routes = (
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
)

export default routes
