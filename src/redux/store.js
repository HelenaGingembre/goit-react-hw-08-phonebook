import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlice';
import filterReducer from './filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
/*
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store; */

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
const persistedFilterReducer = persistReducer(persistConfig, filterReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: persistedFilterReducer,
  },
});

export const persistor = persistStore(store);
/*
export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};*/
