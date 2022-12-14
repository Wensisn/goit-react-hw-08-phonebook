import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { ifErrorLoginAlert , ifErrorSigUpAlert , ifErrorAlert} from '../../notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signupUser = createAsyncThunk(
  'login/signupUser',
  async ({ name, email, password }, thunkAPI) => {
    console.log({ name, email, password });
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(ifErrorSigUpAlert());
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    console.log({ email, password });
    try {
      const response = await axios.post('/users/login', {
        email,
        password,
      });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(ifErrorLoginAlert());
    }
  }
);

export const logOutUser = createAsyncThunk('auth/logOutUser', async () => {
  try {
    await axios.post(`/users/logout`);
    clearAuthHeader();
  } catch (e) {}
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(ifErrorAlert());
    }
  }
);
