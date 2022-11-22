import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlice';
import filterReducer from './filterSlice';
// import { contactsReducer } from './reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
