import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const ordersAdapter = createEntityAdapter({
  selectId: (order) => order.id,
  sortComparer: false,
})

const slice = createSlice({
  name: 'Dashboard',
  initialState: ordersAdapter.getInitialState(),
  reducers: {
    addOrder: ordersAdapter.addOne,
    updateOrder: ordersAdapter.updateOne,
  },
})

export const { addOrder } = slice.actions

export const {
  selectAll: getAllOrders,
  selectById: getOrderById,
} = ordersAdapter.getSelectors((state) => state[slice.name])

export default slice.reducer
