import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import { IProduct } from '@/types/product';

const favoritesAdapter = createEntityAdapter<IProduct>();

export interface FavoritesState {
  products: IProduct[];
}

const initialState: FavoritesState = favoritesAdapter.getInitialState({
  products: [],
});

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<IProduct>) {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products.splice(index, 1);
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
