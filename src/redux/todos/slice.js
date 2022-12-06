import { createSlice } from '@reduxjs/toolkit';
import { allContacts, addContact, deleteContact } from './operation';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [allContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [allContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [allContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const todoReducer = todoSlice.reducer;
