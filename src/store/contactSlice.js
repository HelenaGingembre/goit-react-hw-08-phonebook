import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      console.log('state', state);
      console.log('action', action);

      state.contacts.push({
        id: nanoid(6),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    removeContact(state, action) {},
  },
});

export const { addContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;
