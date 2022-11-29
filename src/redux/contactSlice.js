import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import {
  fetchPhoneBooks,
  addContact,
  removeContact,
  updateContact,
} from './operations';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
/*
export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://637f84ef5b1cc8d6f947ec12.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    getContactById: builder.query({
      query: id => `/contacts/${id}`,
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: builder.mutation({
      query: fields => ({
        url: `/contacts/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactByIdQuery,
  useUpdateContactMutation,
} = contactsApi;
*/

const extraActions = [
  fetchPhoneBooks,
  addContact,
  removeContact,
  updateContact,
];
const getActions = type => extraActions.map(action => action[type]);

// Case reducers
const fetchContactsSuccessReducer = (state, { payload }) => {
  state.items = payload;
};
const addContactSuccessReducer = (state, { payload }) => {
  state.items.push(payload);
  // [...state.items, payload];
};
const removeContactSuccessReducer = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload);
};
const updateContactSuccessReducer = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items[index] = payload;
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
      .addCase(updateContact.fulfilled, updateContactSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledreducer),
});

console.log('contactSlice', contactSlice);

// Редюсер слайса
export const contactsReducer = contactSlice.reducer;
