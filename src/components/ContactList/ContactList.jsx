import { useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts } from '../../redux/selectors';

import { ContactListItem } from '../ContactItem/ContactItem';
import { ContactListBox } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {/* {isLoading && <p>Loading phone books...</p>}
      {error && <p>{error}</p>} */}
      {contacts.length > 0 && filteredContacts.length !== 0 ? (
        <ContactListBox>
          {filteredContacts.map(item => (
            <ContactListItem contact={item.name} key={item.id} />
          ))}
        </ContactListBox>
      ) : (
        <h4>Phonebook is empty</h4>
      )}
    </>
  );
};
