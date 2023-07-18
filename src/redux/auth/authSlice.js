import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './operations';

const initialState = {
  user: { name: null,surname: null, phone: null, email: null,password: null },
  isLoggedIn: false,
  token: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.token = payload.token;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = {
          email: payload.email,
          password: payload.password,
        };
        state.isLoggedIn = true;
        state.token = payload.token;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = { name: null,surname: null, phone: null, email: null,password: null };
        state.isLoggedIn = false;
        state.token = '';
      }),
});

export const authReducer = authSlice.reducer