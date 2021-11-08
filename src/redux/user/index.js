import { createSlice } from '@reduxjs/toolkit'

const initialState = { name: '', phone: '' }
const slice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload
    },
    setPhone: (state, { payload }) => {
      state.phone = payload
    },
  },
})

export const { setName, setPhone } = slice.actions

export default slice.reducer
