import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, action) => (state = action.payload),
  },
});

console.log('contactsFilterSlice', contactsFilterSlice);
// Генераторы экшенов

export const { filterContact } = contactsFilterSlice.actions;

// Редюсер слайса
const filterReducer = contactsFilterSlice.reducer;
export default filterReducer;
