import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userCategory: null,
  category: [],
};

export const categorySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateUserCategory: (state, action) => {
      state.userCategory = action.payload;
    },
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserCategory, updateCategory } = categorySlice.actions;

export default categorySlice.reducer;
