import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://shopagronom-backend.onrender.com';
export const fetchProductsHerbicides = createAsyncThunk(
  'products/herbicides',
  async (_, thunkApi) => {
    try {
      const productsHerbicides = await axios.get(
        '/api/plantsProtect/herbicides'
      );
      return productsHerbicides;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchProductsFungicides = createAsyncThunk(
  'products/fungicides',
  async (_, thunkApi) => {
    try {
      const productsFungicides = await axios.get(
        '/api/plantsProtect/fungicides'
      );
      return productsFungicides;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchProductsDesiccants = createAsyncThunk(
  'products/desiccants',
  async (_, thunkApi) => {
    try {
      const productsDesiccants = await axios.get(
        '/api/plantsProtect/desiccants'
      );
      return productsDesiccants;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchProductsAdjuvants = createAsyncThunk(
  'products/adjuvants',
  async (_, thunkApi) => {
    try {
      const productsAdjuvants = await axios.get('/api/plantsProtect/adjuvants');
      return productsAdjuvants;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);


export const fetchProductsInsecticides = createAsyncThunk(
  'products/insecticides',
  async (_, thunkApi) => {
    try {
      const productsInsecticides = await axios.get(
        '/api/plantsProtect/insecticides'
      );
      return productsInsecticides;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchProductsRetardants = createAsyncThunk(
  'products/retardants',
  async (_, thunkApi) => {
    try {
      const productsRetardants = await axios.get(
        '/api/plantsProtect/retardants'
      );
      return productsRetardants;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchProductsRodenticides = createAsyncThunk(
  'products/rodenticides',
  async (_, thunkApi) => {
    try {
      const productsRodenticides = await axios.get(
        '/api/plantsProtect/rodenticides'
      );
      return productsRodenticides;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchProductsStainRemovers = createAsyncThunk(
  'products/stainRemovers',
  async (_, thunkApi) => {
    try {
      const productsStainRemovers = await axios.get(
        '/api/plantsProtect/stainRemovers'
      );
      return productsStainRemovers;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);