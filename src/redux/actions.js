import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

export const addContact = ({ name, number }) => {
  toast.success(`New contact- "${name}" is add in your phonebook`);
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(6),
      name,
      number,
    },
  };
};

export const removeContact = contactId => {
  toast.success(`Contact is delete`);
  return {
    type: 'contacts/removeContact',
    payload: contactId,
  };
};
