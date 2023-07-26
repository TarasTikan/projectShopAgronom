import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://shopagronom-backend.onrender.com';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAothHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const register = createAsyncThunk('auth/register', async (credentials,thunkAPI) => {
  try {
    const { data } = await axios.post('/api/auth/register', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
});

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/api/auth/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/api/auth/logout');
      clearAothHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState()
  const token = state.auth.token

  if(token === null) {
    return
  }
})