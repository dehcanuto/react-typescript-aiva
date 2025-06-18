import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/types/product';

export interface CartState {
  items: IProduct[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartItem(state, action: PayloadAction<IProduct>) {
      const index = state.items.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleCartItem } = cartSlice.actions;
export default cartSlice.reducer;
