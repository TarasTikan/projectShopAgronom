const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    itemOffset: 0,
    currentItems: [],
    pageCount: 0,
}
const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        addCurrentItems: (state, {payload})=> {
            state.currentItems = payload
        },
        addPageCount: (state, {payload})=> {
            state.pageCount = payload
        },
        addItemOffset: (state, {payload})=> {
            state.itemOffset = payload
        }
    }
})

export const { addCurrentItems, addPageCount, addItemOffset } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer