const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
        filterProducer: [],
        filterCulture: [],
        filterNumber: [],
        filteredItem: [],
}
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addProducer: (state, { payload }) => {
      state.filterProducer.push(payload);
    },
    addCulture: (state, { payload }) => {
      state.filterCulture.push(payload);
    },
    addNumber: (state, { payload }) => {
      state.filterNumber.push(payload);
    },
    deleteProducer: (state, { payload }) => {
      state.filterProducer = state.filterProducer.filter(
        item => item !== payload
      );
    },
    deleteCulture: (state, { payload }) => {
      state.filterCulture = state.filterCulture.filter(
        item => item !== payload
      );
    },
    deleteNumber: (state, { payload }) => {
      state.filterNumber = state.filterNumber.filter(item => item !== payload);
    },
    filteredProducts: (state, { payload }) => {
      state.filteredItem = payload
    },
  },
});

export const {
  addProducer,
  addCulture,
  addNumber,
  deleteProducer,
  deleteCulture,
  deleteNumber,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;