import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

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
  }
  quantity: number
}

interface CartState {
  products: IProduct[]
  quantity: number
  total: number
  shipping: number
  isCartOpen: boolean
}

const initialState: CartState = {
  isCartOpen: false,
  products: [],
  quantity: 0,
  total: 0,
  shipping: 50,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen
    },

    clearCart: (state) => {
      state.products = []
    },

    // addCart: (state, action) => {
    //   const existingProduct = state.products.find(
    //     (product) => product.slug === action.payload.slug,
    //   );
    //   if (existingProduct) {
    //     existingProduct.quantity += 1;
    //     return;
    //   } else {
    //     state.products = [
    //       ...state.products,
    //       { ...action.payload, quantity: 1 },
    //     ];
    //   }
    // },

    addToCart(state, action) {
      const itemSlug = state.products.findIndex(
        (product) => product.slug === action.payload.slug,
      )

      if (itemSlug >= 0) {
        state.products[itemSlug].quantity += action.payload.quantity || 1
      } else {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        })
      }
      state.quantity += action.payload.quantity || 1

      console.log(state.quantity)
    },

    // increaseQuantity: (state, action) => {
    //   const product = state.products.find(
    //     (product) => product.slug === action.payload,
    //   );
    //   product && product.quantity++;
    // },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const productIndex = state.products.findIndex(
        (product) => product.slug === action.payload,
      )

      if (productIndex !== -1 && state.products[productIndex].quantity < 999) {
        state.products[productIndex].quantity += 1
        state.quantity += 1
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const productIndex = state.products.findIndex(
        (product) => product.slug === action.payload,
      )

      if (productIndex !== -1) {
        const product = state.products[productIndex]
        if (product.quantity > 1) {
          product.quantity -= 1
        } else {
          state.products = state.products.filter(
            (product) => product.slug !== action.payload,
          )
        }
        state.quantity -= 1
      }
    },

    // decreaseQuantity: (state, action) => {
    //   const product = state.products.find(
    //     (product) => product.slug === action.payload,
    //   );
    //   if (product && product.quantity === 1) {
    //     product?.quantity === 1;
    //   } else {
    //     product && product.quantity--;
    //   }
    // },

    removeProduct: (state, action) => {
      const product = state.products.find(
        (product) => product.slug === action.payload,
      )

      state.quantity -= product?.quantity || 0

      state.products = state.products.filter(
        (product) => product.slug !== action.payload,
      )
    },

    calculateTotal: (state) => {
      //   let amount = 0;
      //   let total = 0;
      //   state.products.forEach((products) => {
      //     amount += products.quantity;
      //     total += products.price_mdl * products.quantity;
      //   });
      //   state.amount = amount;
      //   state.total = total;
    },
  },
})

export const selectCartProducts = (state: RootState) => state.cart.products

export const selectCartTotal = createSelector(
  [selectCartProducts],
  (products) => {
    return products.reduce(
      (total, product) =>
        total +
        (!product.discount
          ? product.price_mdl
          : product.price_mdl - (product.price_mdl * product.discount) / 100) *
        product.quantity,
      0,
    )
  },
)

export const {
  clearCart,
  addToCart,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
  toggleCart,
} = cartSlice.actions
export const cartReducer = cartSlice.reducer
