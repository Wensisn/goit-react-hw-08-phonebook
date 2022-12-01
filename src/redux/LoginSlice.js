import { createSlice } from '@reduxjs/toolkit';
import { addUser } from '../redux/userOperation';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addUser.pending]: handlePending,

    [addUser.rejected]: handleRejected,

    [addUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push({
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      });
    },
  },
});

export const loginReducer = loginSlice.reducer;
