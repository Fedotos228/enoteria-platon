import { createSlice } from '@reduxjs/toolkit'

interface IProduct {
  title: string
  discount: number
  price_mdl: number
  slug: string
  thumbnail: {
    data: {
      attributes: {
        url: string
      }
    }
  },
  quantity: number
}

interface CartState {
  products: IProduct[]
  amount: number
  total: number
  shipping: number
}

const initialState: CartState = {
  products: [],
  amount: 0,
  total: 0,
  shipping: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.products = []
    },
    addCart: (state, action) => {
      const existingProduct = state.products.find((product) => product.slug === action.payload.slug)
      if (existingProduct) {
        existingProduct.quantity += 1
        return
      } else {
        state.products = [...state.products, { ...action.payload, quantity: 1 }]
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find((product) => product.slug === action.payload)
      product && product.quantity++
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find((product) => product.slug === action.payload)
      if (product && product.quantity === 1) {
        product?.quantity === 1
      } else {
        product && product.quantity--
      }
    },
    removeCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.slug !== action.payload
      )
    },
    calculateTotal: (state) => {
      let amount = 0
      let total = 0

      state.products.forEach(products => {
        amount += products.quantity
        total += products.price_mdl * products.quantity
      })

      state.amount = amount
      state.total = total
    },
    calculateShipping: (state) => {
      state.shipping = state.products.length === 0 ? 0 : 50;
    },
  },
})

export const { clearCart, addCart, removeCart, increaseQuantity, decreaseQuantity, calculateTotal, calculateShipping } = cartSlice.actions
export const cartReducer = cartSlice.reducer