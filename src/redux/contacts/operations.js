import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://637f84ef5b1cc8d6f947ec12.mockapi.io';

export const fetchPhoneBooks = createAsyncThunk(
  'contacts/fetchAll',
  // Используем символ подчеркивания как имя первого параметра,
  // потому что в этой операции он нам не нужен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // При успешном запросе возвращаем промис с данными
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(error.message);
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
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
