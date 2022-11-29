import { useSelector } from 'react-redux';
import { selectContacts /*selectFilteredContacts*/ } from 'redux/selectors';

import { ContactListItem } from '../ContactItem/ContactItem';
import { ContactListBox } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  // const filteredContacts = useSelector(selectFilteredContacts);
  console.log('contacts', contacts);
  return (
    <>
      {/* {isLoading && <p>Loading phone books...</p>}
      {error && <p>{error}</p>} */}
      {/* {contacts.length > 0 && filteredContacts.length !== 0 ? ( */}
      {contacts.length > 0 ? (
        <ContactListBox>
          {contacts.map(item => (
            <ContactListItem contact={item} key={item.id} />
          ))}
        </ContactListBox>
      ) : (
        <h4>Phonebook is empty</h4>
      )}
    </>
  );
};
