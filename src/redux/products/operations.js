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