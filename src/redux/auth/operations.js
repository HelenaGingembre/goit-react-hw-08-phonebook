import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      console.log('res.data.token', res.data.token);
      return res.data;
    } catch (error) {
      toast.error('User is already exist');
      if (error.response.status === 400) {
        toast.error('User creation error! Please try again!');
      } else if (error.response.status === 500) {
        toast.error('Oops! Server error! Please try later!');
      } else {
        toast.error('Something went wrong!');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      console.log('/users/login', res.data);
      return res.data;
    } catch (error) {
      console.log('Incorrect login or password');
      toast.error('Incorrec email or password! Try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    if (error.response.status === 500) {
      toast.error('Oops! Server error! Please try later!');
    }
    toast.error('Something went wrong! Please reload the page!');

    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  // 'auth/refresh',
  'auth/relogin',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      // const res = await axios.get('/users/me');
      const res = await axios.get('/users/current');
      console.log('/users/current', res.data);
      return res.data;
    } catch (error) {
      clearAuthHeader();
      if (error.response.status === 401) {
        toast.error(
          'something went wrong, user unauthorized. Please, try again'
        );
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      toast.error('something went wrong, please, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
