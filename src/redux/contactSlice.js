import { createSlice } from '@reduxjs/toolkit';
import contactsInitialState from '../data/contacts.json';
// import { nanoid } from 'nanoid';
// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
console.log(contactsInitialState);

const contactSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState:
    // JSON.parse(localStorage.getItem('contacts')) || contactsInitialState || [],
    contactsInitialState,
  // Объект редюсеров
  reducers: {
    addContact: (state, action) => [...state, action.payload],

    removeContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

console.log('contactSlice', contactSlice);

// Генераторы экшенов
export const { addContact, removeContact } = contactSlice.actions;

const contactsReducer = contactSlice.reducer;
// Редюсер слайса
export default contactsReducer;
