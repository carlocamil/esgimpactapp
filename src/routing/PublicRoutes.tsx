import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {AuthPage} from '../../components/modules/auth'

export function PublicRoutes() {
  return (
    <Switch>
      <Route path='/auth' component={AuthPage} />
      <Redirect to='/auth' />
    </Switch>
  )
}
