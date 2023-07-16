import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const initialState = {
  user: { name: null,surname: null, phone: null, email: null,password: null },
  isLoggedIn: false,
  token: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isLoggedIn = true;
    }),
});

export const authReducer = authSlice.reducer