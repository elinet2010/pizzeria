import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const ordersAdapter = createEntityAdapter({
  selectId: (order) => order.id,
  sortComparer: false,
})

const slice = createSlice({
  name: 'Orders',
  initialState: ordersAdapter.getInitialState(),
  reducers: {
    addOrder: ordersAdapter.addOne,
    removeOrder: ordersAdapter.removeOne,
    removeAll: ordersAdapter.removeAll,
  },
})

export const { addOrder, removeOrder, removeAll } = slice.actions

export const {
  selectAll: getAllOrders,
  selectById: getOrderById,
} = ordersAdapter.getSelectors((state) => state[slice.name])

export default slice.reducer
