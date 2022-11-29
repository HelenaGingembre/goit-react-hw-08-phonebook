import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './contactSlice';

axios.defaults.baseURL = 'https://637f84ef5b1cc8d6f947ec12.mockapi.io';

export const fetchPhoneBooks = createAsyncThunk(
  'contacts/fetchAll',
  // Используем символ подчеркивания как имя первого параметра,
  // потому что в этой операции он нам не нужен
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      // При успешном запросе возвращаем промис с данными
      return response.data;
    } catch (error) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return rejectWithValue(error.message);
    }
  }
);
/*
  try {
    // Индикатор загрузки
    dispatch(fetchingInProgress());
    // HTTP-запрос
    const response = await axios.get('/contacts');
    // Обработка данных
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    // Обработка ошибки
    dispatch(fetchingError(error.message));
  }
};*/

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
