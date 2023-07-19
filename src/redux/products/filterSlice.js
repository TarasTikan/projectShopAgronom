const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
        filterProducer: '',
        filterCulture: [],
        filterNumber: null,
}
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterProducts: (state, { payload }) => {
        state.filterProducer = payload.filterProducer;
        state.filterCulture = payload.filterCulture;
        state.filterNumber = payload.filterNumber;
    },
  },
});

export const { filterProducts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;