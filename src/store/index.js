import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    // filter: filterReduser, // заготовка потім дописати TODO!!!!
  },
});

export default store;
