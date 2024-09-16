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
import { setCountry } from './slices/country.slice'
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

const countryActions = {
  setCountry
}

export const rootActions = {
  ...cartActions,
  ...filterActions,
  ...countryActions
}
