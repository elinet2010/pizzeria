import React, { } from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuth, ...props}) => {

  return (
        <Route {...props} >{isAuth ? <Component /> : <Redirect to="/login" />}</Route>
  )
}

export default PrivateRoute