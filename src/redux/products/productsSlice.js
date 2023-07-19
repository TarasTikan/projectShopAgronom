import { fetchProducts } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  products: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder =>
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.products.items = payload;
      state.products.isLoading = false;
      state.products.error = null;
    }),
});

export const productsReducer = productsSlice.reducer;