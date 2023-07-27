import { addProductBacket, fetchBasketProducts, removeProductsBasket } from "./operations";

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
      }),
});
export const basketReducer = basketSlice.reducer