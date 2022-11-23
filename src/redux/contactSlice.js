import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import contactsInitialState from '../data/contacts.json';

console.log('contactsInitialState', contactsInitialState);

const contactSlice = createSlice({
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
export const { addContact, removeContact } = contactSlice.actions;

const contactsReducer = contactSlice.reducer;
// Редюсер слайса
export default contactsReducer;
