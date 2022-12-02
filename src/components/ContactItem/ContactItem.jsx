import { useDispatch } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
import { removeContact } from 'redux/contacts/operations';

import { ContactListLi, ButtonDelete } from '../ContactList/ContactList.styled';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(removeContact(contact.id));

  return (
    <ContactListLi>
      {contact.name}: {contact.number}
      <ButtonDelete onClick={handleDelete}>x</ButtonDelete>
    </ContactListLi>
  );
};
