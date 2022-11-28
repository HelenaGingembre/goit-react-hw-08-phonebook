import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

import { ContactListItem } from '../ContactItem/ContactItem';
import { ContactListBox } from './ContactList.styled';

export const ContactList = () => {
  // const contacts = useSelector(getContacts);
  const { items, isLoading, error } = useSelector(getContacts);
  console.log('getContacts', getContacts);
  const filterValue = useSelector(getFilter);
  const normalizedFilter = filterValue.toLowerCase();
  console.log('filterValue', filterValue);
  // console.log('getContacts', contacts);

  //функція (метод) отримання контактів для відмальовки у листі (фільтр -  не чутливий до регістру)

  const getVisibleContacts = items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );

  console.log('getVisibleContacts', getVisibleContacts);

  return (
    <>
      {isLoading && <p>Loading phone books...</p>}
      {error && <p>{error}</p>}
      {getVisibleContacts.length > 0 && JSON.stringify(items, null, 2) ? (
        <ContactListBox>
          {getVisibleContacts.map(item => (
            <ContactListItem contact={item.name} key={item.id} />
          ))}
        </ContactListBox>
      ) : (
        <h4>Phonebook is empty</h4>
      )}
    </>
  );
};
