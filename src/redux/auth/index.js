import { createSlice } from '@reduxjs/toolkit'

const initialState = { token: '' }

const slice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    }
  },
})

export const { setToken } = slice.actions

export default slice.reducer
