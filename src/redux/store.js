import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productsReducer } from './products/productsSlice';
import { filterReducer } from './products/filterSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};


export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store);