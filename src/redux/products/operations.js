import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://shopagronom-backend.onrender.com';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (requestData, thunkApi) => {
    try {
      const { page, router } = requestData;
      const response = await axios.get(`/api/${page}/${router}`);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchProductOne = createAsyncThunk('product/fetchOne', async (plantsInfo, thunkApi)=>{
  try {
    const {plants, id,page} = plantsInfo
    const response = await axios.get(`/api/${page}/${plants}/${id}`);
   return response.data
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
})
