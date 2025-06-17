import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import favoritesReducer from './favorites';
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
