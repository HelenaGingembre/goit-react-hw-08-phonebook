import {
  configureStore,
  // combineReducers,
  // getDefaultMiddleware,
} from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contactSlice';
import filterReducer from '../redux/contacts/filterSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from './auth/authSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const rootContactsReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // contacts: rootContactsReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
