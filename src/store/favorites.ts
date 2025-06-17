import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import { IProduct } from '@/types/product';

const favoritesAdapter = createEntityAdapter<IProduct>();

type FavoritesState = ReturnType<typeof favoritesAdapter.getInitialState> & {
  products: IProduct[];
};

const initialState: FavoritesState = favoritesAdapter.getInitialState({
  products: [],
});

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const alreadyFav = state.products.some((p) => p.id === product.id);

      if (alreadyFav) {
        favoritesAdapter.removeOne(state, product.id);
        state.products = state.products.filter(
          (prod) => prod.id !== product.id
        );
      } else {
        favoritesAdapter.addOne(state, product);
        state.products.push(product);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
