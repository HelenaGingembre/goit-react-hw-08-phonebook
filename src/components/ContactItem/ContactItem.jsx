import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactSlice';

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
