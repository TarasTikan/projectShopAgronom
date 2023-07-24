import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://shopagronom-backend.onrender.com';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (plants, thunkApi) => {
    try {
      const response = await axios.get(`/api/plantsProtect/${plants}`);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchProductOne = createAsyncThunk('product/fetchOne', async (plantsInfo, thunkApi)=>{
  try {
    const {plants, id} = plantsInfo
    const response = await axios.get(
      `/api/plantsProtect/${plants}/${id}`
    );
   return response.data
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
})