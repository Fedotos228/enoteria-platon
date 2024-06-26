import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  subcategory: string[];
}

const initialState: FilterState = {
  subcategory: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      const slug = action.payload;
      if (state.subcategory.includes(slug)) {
        state.subcategory = state.subcategory.filter((item) => item !== slug);
      } else {
        state.subcategory.push(slug);
      }
    },
    setFilters: (state, action) => {
      state.subcategory = action.payload;
    },
  },
});

export const { toggleCategory, setFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
