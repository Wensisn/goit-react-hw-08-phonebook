import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addUser = createAsyncThunk(
  'login/addUser',
  async ({ name, email, password }, thunkAPI) => {
    console.log({ name, email, password });
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
