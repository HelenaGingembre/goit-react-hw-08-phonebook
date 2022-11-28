import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // При успешном запросе возвращаем промис с данными
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
