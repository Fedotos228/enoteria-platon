import { createSlice } from '@reduxjs/toolkit'

export const countrySlice = createSlice({
  name: "country",
  initialState: '',
  reducers: {
    setCountry: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setCountry } = countrySlice.actions;
export const countryReducer = countrySlice.reducer;