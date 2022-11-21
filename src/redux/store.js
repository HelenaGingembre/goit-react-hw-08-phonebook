import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer /*, filtersReducer */ } from './contactSlice';
import { contactsReducer /*, filtersReducer */ } from './reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filters: filtersReducer, // заготовка потім дописати TODO!!!!
  },
});

export default store;
