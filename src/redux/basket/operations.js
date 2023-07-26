import axios from 'axios';
const { createAsyncThunk } = require('@reduxjs/toolkit');
axios.defaults.baseURL = 'https://shopagronom-backend.onrender.com';

export const fetchBasketProducts = createAsyncThunk(
  'basket/products',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/api/basketProducts');
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const removeProductsBasket = createAsyncThunk('basket/removeProducts', async (id, thunkApi)=>{
    try {
       await axios.delete(`/api/basketProducts/${id}`)
        return id
    } catch (e) {
        return thunkApi.rejectWithValue(e.message)
    }
})

export const addProductBacket = createAsyncThunk('basket/addProduct', async (text, thunkApi)=>{
    try {
      const response = await axios.post('/api/basketProducts', text);
        return response.data
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
})