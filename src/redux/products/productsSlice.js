const { createSlice } = require("@reduxjs/toolkit");
const { fetchProductsHerbicides, fetchProductsFungicides, fetchProductsDesiccants, fetchProductsAdjuvants, fetchProductsInsecticides, fetchProductsRetardants, fetchProductsStainRemovers, fetchProductsRodenticides } = require("./operations");
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchProductsHerbicides.fulfilled, (state, { payload }) => {
        state.products.items = payload;
        state.products.isLoading = false;
        state.products.error = null;
      })
      .addCase(fetchProductsFungicides.fulfilled, (state, { payload }) => {
        state.products.items = payload;
        state.products.isLoading = false;
        state.products.error = null;
      })
      .addCase(fetchProductsDesiccants.fulfilled, (state, { payload }) => {
        state.products.items = payload;
        state.products.isLoading = false;
        state.products.error = null;
      })
      .addCase(fetchProductsAdjuvants.fulfilled, (state, { payload }) => {
        state.products.items = payload;
        state.products.isLoading = false;
        state.products.error = null;
      })
      .addCase(fetchProductsInsecticides.fulfilled, (state, { payload }) => {
        state.products.items = payload;
        state.products.isLoading = false;
        state.products.error = null;
      })
      .addCase(fetchProductsRetardants.fulfilled, (state, { payload }) => {
        state.products.items = payload;
        state.products.isLoading = false;
        state.products.error = null;
      })
      .addCase(fetchProductsStainRemovers.fulfilled, (state, { payload }) => {
        state.products.items = payload;
        state.products.isLoading = false;
        state.products.error = null;
      })
      .addCase(fetchProductsRodenticides.fulfilled, (state, { payload }) => {
        state.products.items = payload;
        state.products.isLoading = false;
        state.products.error = null;
      }),
});

export const productsReducer = productsSlice.reducer;