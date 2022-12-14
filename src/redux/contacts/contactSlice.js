import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchPhoneBooks, addContact, removeContact } from './operations';

const extraActions = [fetchPhoneBooks, addContact, removeContact];
const getActions = type => extraActions.map(action => action[type]);

// Case reducers
const fetchContactsSuccessReducer = (state, { payload }) => {
  state.items = payload;
};
const addContactSuccessReducer = (state, { payload }) => {
  state.items.push(payload);
};
const removeContactSuccessReducer = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};

const pendingReducer = state => {
  state.isLoading = true;
};
const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const fulfilledreducer = state => {
  state.isLoading = false;
  state.error = null;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Добавляем обработку внешних экшенов
  extraReducers: builder =>
    builder
      .addCase(fetchPhoneBooks.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(removeContact.fulfilled, removeContactSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledreducer),
});

// Редюсер слайса
const contactsReducer = contactSlice.reducer;
export default contactsReducer;
