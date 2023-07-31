import { addProductBacket, fetchBasketProducts, removeProductsBasket } from "./operations";
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    items: [],
    isLoading: false,
    error: null,
}
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  extraReducers: Builder =>
    Builder.addCase(addProductBacket.fulfilled, (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
      state.error = null;
    })
      .addCase(fetchBasketProducts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeProductsBasket.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item._id !== payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeProductsBasket.pending, handlePending)
      .addCase(fetchBasketProducts.pending, handlePending)
      .addCase(addProductBacket.pending, handlePending)
      .addCase(removeProductsBasket.rejected, handleRejected)
      .addCase(fetchBasketProducts.rejected, handleRejected)
      .addCase(addProductBacket.rejected, handleRejected),
});
export const basketReducer = basketSlice.reducer