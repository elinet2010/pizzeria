import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeView from '../components/views/HomeView'
import Error404View from '../components/views/Error404View'
import LoginView from '../components/views/LoginView'
import Dashboard from '../components/views/Dashboard'
import PrivateRoute from './PrivateRoute'
import { connect } from 'react-redux'

const Router = ({ token }) => {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/login" component={LoginView} />
        <PrivateRoute
          exact
          path="/dashboard"
          component={Dashboard}
          isAuth={Boolean(token)}
        />
        <Route path="*" exact={true} component={Error404View} />
      </Switch>
    </Suspense>
  )
}

const mapStateToProps = (state) => ({
  token: state.Auth.token,
})

export default connect(mapStateToProps)(Router)
