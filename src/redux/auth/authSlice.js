import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, login, logout, register } from './operations';

const initialState = {
  user: { name: null, surname: null, phone: null, email: null, password: null },
  isLoggedIn: false,
  isRefreshing: false,
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = {
          name: payload.name,
          surname: payload.surname,
          phone: payload.phone,
          email: payload.email,
          password: payload.password,
        };
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
        state.user = {
          name: null,
          surname: null,
          phone: null,
          email: null,
          password: null,
        };
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(fetchCurrentUser.fulfilled, (state,{payload})=>{
        state.user = {
          name: payload.name,
          surname: payload.surname,
          phone: payload.phone,
          email: payload.email,
          password: payload.password,
        };
        state.isLoggedIn = true
      }),
});

export const authReducer = authSlice.reducer;
