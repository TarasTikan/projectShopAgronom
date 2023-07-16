import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://shopagronom-backend.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/api/auth/register', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/api/auth/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/api/auth/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});
