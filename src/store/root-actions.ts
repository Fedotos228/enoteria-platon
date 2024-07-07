import {
  addToCart,
  calculateTotal,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
  selectCartTotal,
  toggleCart,
} from "./slices/cart.slice"
import { setFilters, toggleCategory } from "./slices/filter.slice"

const cartActions = {
  clearCart,
  addToCart,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
  selectCartTotal,
  toggleCart,
}

const filterActions = {
  toggleCategory,
  setFilters,
}

export const rootActions = {
  ...cartActions,
  ...filterActions,
}
