import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    subCategories: [],
    loading: false,
    error: null,
  },
  reducers: {
    loadCategory: (state, action) => {
      state.categories = action.payload;
    },

    loadSubCategory: (state, action) => {
      state.subCategories = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loadCategory, loadSubCategory, setLoading, setError } =
  categorySlice.actions;
export default categorySlice.reducer;
