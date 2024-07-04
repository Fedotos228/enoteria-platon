import {
  addCart,
  addShippingTax,
  calculateTotal,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeCart
} from './slices/cart.slice'
import {
  setFilters,
  toggleCategory
} from './slices/filter.slice'

const cartActions = {
  clearCart,
  addCart,
  removeCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
  addShippingTax
}

const filterActions = {
  toggleCategory,
  setFilters
}

export const rootActions = {
  ...cartActions,
  ...filterActions
}