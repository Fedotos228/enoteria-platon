import { createSlice } from '@reduxjs/toolkit'


const initialState: string[] = []

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters(state, action) {
      return {
        ...state,
      }
    }
  }
})

export const { setFilters } = filterSlice.actions
export const filterReducer = filterSlice.reducer