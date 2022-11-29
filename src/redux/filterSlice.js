import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContact: (state, { payload }) => (state.filter = payload),
  },
});

console.log('contactsFilterSlice', contactsFilterSlice);
// Генераторы экшенов

export const { filterContact } = contactsFilterSlice.actions;

// Редюсер слайса
export const filterReducer = contactsFilterSlice.reducer;
