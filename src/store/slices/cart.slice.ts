import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    amount: 0,
    total: 0,
  },
  reducers: {

  },
})