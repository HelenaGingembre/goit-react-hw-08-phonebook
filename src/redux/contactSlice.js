import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchPhoneBooks } from './operations';

// console.log('contactsInitialState', contactsInitialState);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  // Добавляем обработку внешних экшенов
  extraReducers: {
    [fetchPhoneBooks.pending](state) {
      state.isLoading = true;
    },
    [fetchPhoneBooks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchPhoneBooks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  /* // Выполнится в момент старта HTTP-запроса
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    // Выполнится если HTTP-запрос завершился успешно
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // Выполнится если HTTP-запрос завершился с ошибкой
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },*/
});
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactSlice.actions;

const contactSlice1 = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: [],
  // Объект редюсеров
  reducers: {
    addContact: {
      reducer: (state, action) => [...state, action.payload],
      prepare: newContact => ({ payload: { id: nanoid(), ...newContact } }),
    },
    removeContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

console.log('contactSlice', contactSlice);

// Генераторы экшенов
// export const { addContact, removeContact } = contactSlice1.actions;

// Редюсер слайса
export const contactsReducer = contactSlice.reducer;
