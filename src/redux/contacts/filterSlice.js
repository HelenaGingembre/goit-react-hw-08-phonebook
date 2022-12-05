import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterContact: (_, { payload }) => {
      return payload;
    },
  },
});

console.log('contactsFilterSlice', contactsFilterSlice);
// Генераторы экшенов

export const { setFilterContact } = contactsFilterSlice.actions;

// Редюсер слайса
const filterReducer = contactsFilterSlice.reducer;
export default filterReducer;
