import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContact: (state, action) => (state.filter = action.payload),
  },
});

console.log('contactsFilterSlice', contactsFilterSlice);
// Генераторы экшенов

export const { filterContact } = contactsFilterSlice.actions;

// Редюсер слайса
const filterReducer = contactsFilterSlice.reducer;
export default filterReducer;
