import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { createAction } from '@reduxjs/toolkit';

//export const addContact = ({ contact }) => {
export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    toast.success(`New contact- "${name}" is add in your phonebook`);

    console.log('contact', name);
    console.log('number', number);
    return {
      // type: 'contacts/addContact',
      payload: {
        id: nanoid(6),
        name: name,
        number: number,
      },
    };
  }
);

//export const removeContact = contactId => {
export const removeContact = createAction(
  'contacts/removeContact',
  contactId => {
    toast.success(`Contact is delete`);

    return {
      //type: 'contacts/removeContact',
      payload: contactId,
    };
  }
);
