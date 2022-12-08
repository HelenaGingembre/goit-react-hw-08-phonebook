import { useSelector } from 'react-redux';
import { selectContacts, selectFilterContacts } from 'redux/contacts/selectors';

import { ContactListItem } from '../ContactItem/ContactItem';
import { ContactListBox } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <>
      {contacts.length > 0 && filterContacts.length > 0 ? (
        <ContactListBox>
          {filterContacts.map(contact => (
            <ContactListItem contact={contact} key={contact.id} />
          ))}
        </ContactListBox>
      ) : (
        <div>
          <h4>Phonebook is empty</h4>
        </div>
      )}
    </>
  );
};
