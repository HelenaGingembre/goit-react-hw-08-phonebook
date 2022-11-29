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
      // .addCase(fetchPhoneBooks.pending, state => {
      //   state.isLoading = true;
      // })
      .addCase(fetchPhoneBooks.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      // .addCase(fetchPhoneBooks.rejected, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = payload;
      // })
      // .addCase(addContact.pending, state => {
      //   state.isLoading = true;
      // })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      // .addCase(addContact.rejected, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = payload;
      // })
      // .addCase(removeContact.pending, state => {
      //   state.isLoading = true;
      // })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload);
      })
      // .addCase(removeContact.rejected, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = payload;
      // })
      // .addCase(updateContact.pending, state => {
      //   state.isLoading = true;
      // })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items[index] = payload;
      })
      // .addCase(updateContact.rejected, (state, { payload }) => {
      //   state.error = payload;
      //   state.isLoading = false;
      // })
      .addMatcher(
        isAnyOf(
          fetchPhoneBooks.pending,
          addContact.pending,
          removeContact.pending,
          updateContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchPhoneBooks.rejected,
          addContact.rejected,
          removeContact.rejected,
          updateContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchPhoneBooks.fulfilled,
          addContact.fulfilled,
          removeContact.fulfilled,
          updateContact.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
// Генераторы экшенов
// export const { addContact, removeContact } = contactSlice1.actions;

// Редюсер слайса
export const contactsReducer = contactSlice.reducer;
