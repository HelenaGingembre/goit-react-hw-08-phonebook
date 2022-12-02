import { useDispatch } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
import { removeContact } from 'redux/contacts/operations';

import { ContactListLi, ButtonDelete } from '../ContactList/ContactList.styled';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(removeContact(contact.id));

  // const contacts = useSelector(selectContacts);
  // console.log('contacts Item', contacts);
  // const handleUpdate = contactId => {
  //   const contact = contacts.find((contact.id) => id === contactId);
  //   updateContact(contact);
  // };
  return (
    <ContactListLi>
      {contact.name}: {contact.phone}
      <ButtonDelete onClick={handleDelete}>x</ButtonDelete>
    </ContactListLi>
  );
};
