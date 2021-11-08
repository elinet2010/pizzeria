import { combineReducers } from '@reduxjs/toolkit'

import authReducer from '../auth/index'
import userReducer from '../user/index'
import ordersReducer from '../orders/index'
import dashboardReducer from '../ordersDashboard/index'

const rootReducer = combineReducers({
  Auth: authReducer,
  User: userReducer,
  Orders: ordersReducer,
  Dashboard: dashboardReducer,
})

export default rootReducer