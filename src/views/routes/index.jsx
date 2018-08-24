import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/pages/Home.jsx'

const routes = (
  <Switch>
    <Route component={Home} />
  </Switch>
)

export default routes
