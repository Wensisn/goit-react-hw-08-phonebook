import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ifContactDeletedAlert } from '../../notiflix';

export const allContacts = createAsyncThunk(
  'todos/allContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'todos/addContact',
  async ({ id, name, number }, thunkAPI) => {
    console.log({ name, number });
    try {
      const response = await axios.post('/contacts', { id, name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'todos/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      ifContactDeletedAlert();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
