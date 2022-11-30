import { useSelector } from 'react-redux';
import { selectContacts, selectFilterContacts } from 'redux/selectors';

import { ContactListItem } from '../ContactItem/ContactItem';
import { ContactListBox } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilterContacts);
  // const filter = useSelector(selectFilter);
  // const filterContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filter.toLowerCase())
  // );
  console.log('contacts', contacts);
  return (
    <>
      {contacts.length > 0 && filterContacts.length > 0 ? (
        <ContactListBox>
          {filterContacts.map(item => (
            <ContactListItem contact={item} key={item.id} />
          ))}
        </ContactListBox>
      ) : (
        <h4>Phonebook is empty</h4>
      )}
    </>
  );
};
