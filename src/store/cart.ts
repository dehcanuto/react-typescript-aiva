import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import { IProduct } from '@/types/product';

const cartAdapter = createEntityAdapter<IProduct>();

type CartState = ReturnType<typeof cartAdapter.getInitialState> & {
  items: IProduct[];
};

const initialState: CartState = cartAdapter.getInitialState({
  items: [],
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartItem: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const exists = state.items.some((p) => p.id === product.id);

      if (exists) {
        cartAdapter.removeOne(state, product.id);
        state.items = state.items.filter((p) => p.id !== product.id);
      } else {
        cartAdapter.addOne(state, product);
        state.items.push(product);
      }
    },
    clearCart: (state) => {
      cartAdapter.removeAll(state);
      state.items = [];
    },
  },
});

export const { toggleCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
