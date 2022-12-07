import { createSlice } from '@reduxjs/toolkit';
import {
  signupUser,
  loginUser,
  logOutUser,
  fetchCurrentUser,
} from './operation';

const signupUserRuducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggenIn = true;
};

const loginUserRuducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggenIn = true;
};

const logOutUserRuducer = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggenIn = false;
};

const fetchCurrentUserRuducer = (state, action) => {
  state.user = action.payload;
  state.isLoggenIn = true;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signupUser.fulfilled, signupUserRuducer)
      .addCase(loginUser.fulfilled, loginUserRuducer)
      .addCase(logOutUser.fulfilled, logOutUserRuducer)
      .addCase(fetchCurrentUser.fulfilled, fetchCurrentUserRuducer),
});

export const authReducer = authSlice.reducer;
