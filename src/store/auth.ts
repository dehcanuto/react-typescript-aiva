import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  name: string;
  email: string;
  token: string
};

type AuthState = {
  user: User | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<User>) => {
      state.token = action.payload.token
    },
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
});

export const { setToken, login, logout } = authSlice.actions;
export default authSlice.reducer;
