import { fetchProductOne, fetchProducts } from './operations';

const { createSlice } = require('@reduxjs/toolkit');
const handlePending = state => {
  state.products.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.products.isLoading = false;
  state.products.error = payload;
};
const initialState = {
  products: {
    items: [],
    isLoading: false,
    error: null,
    item: [],
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.rejected, handleRejected)
      .addCase(fetchProductOne.pending, handlePending)
      .addCase(fetchProductOne.rejected, handleRejected)
      .addCase(fetchProductOne.fulfilled, (state, { payload }) => {
        state.products.item = payload;
        state.products.isLoading = false;
        state.products.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.products.items = payload;
        state.products.isLoading = false;
        state.products.error = null;
      }),
});

export const productsReducer = productsSlice.reducer;
