import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
import { removeContact, updateContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import { ContactListLi, ButtonDelete } from '../ContactList/ContactList.styled';

export const ContactListItem = item => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(removeContact(item.id));

  const contacts = useSelector(selectContacts);
  const handleUpdate = contactId => {
    const contact = contacts.find(({ id }) => id === contactId);
    updateContact(contact);
  };
  return (
    <ContactListLi>
      {item.name}: {item.number}
      <ButtonDelete onClick={handleDelete}>x</ButtonDelete>
      <ButtonDelete onClick={() => handleUpdate(item.id)}>Edit</ButtonDelete>
    </ContactListLi>
  );
};
