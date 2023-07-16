import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://shopagronom-backend.onrender.com';


export const register = createAsyncThunk('auth/register', async credentials => {
try {
    const {data} = await axios.post('/api/auth/register', credentials)
    return data
} catch (error) {
    console.log(error)
}
})

export const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/api/auth/login', credentials);
        return data
    } catch (error) {
          console.log(error);
    }
})