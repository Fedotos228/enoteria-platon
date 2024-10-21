import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { persistReducer } from "redux-persist"
import createWebStorage from "redux-persist/lib/storage/createWebStorage"
import { cartReducer } from './slices/cart.slice'
import { countryReducer } from './slices/country.slice'
import { filterReducer } from './slices/filter.slice'

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null)
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value)
    },
    removeItem() {
      return Promise.resolve()
    },
  }
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

const authPersistConfig = {
  key: 'enoteria-platon',
  storage: storage,
  whitelist: ['cart', 'country'],
}

const rootReducer = combineReducers({
  filter: filterReducer,
  cart: cartReducer,
  country: countryReducer,
})

const persistedReducer = persistReducer(authPersistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector