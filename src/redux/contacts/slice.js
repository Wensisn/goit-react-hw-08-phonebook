import { createSlice } from '@reduxjs/toolkit';
import { allContacts, addContact, deleteContact } from './operation';

const allContactsReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const addContactReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push({
    id: action.payload.id,
    name: action.payload.name,
    number: action.payload.number,
  });
};

const deleteContactReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(allContacts.fulfilled, allContactsReducer)
      .addCase(addContact.fulfilled, addContactReducer)
      .addCase(deleteContact.fulfilled, deleteContactReducer),
});

export const contactsReducer = contactsSlice.reducer;
