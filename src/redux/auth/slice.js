import { createSlice } from '@reduxjs/toolkit';
import {
  signupUser,
  loginUser,
  logOutUser,
  fetchCurrentUser,
} from './operation';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signupUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggenIn = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggenIn = true;
    },
    [logOutUser.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggenIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggenIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
