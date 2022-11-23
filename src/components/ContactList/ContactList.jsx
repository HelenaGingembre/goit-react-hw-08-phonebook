// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
// import { toast } from 'react-toastify';
import { ContactListItem } from '../ContactItem/ContactItem';
import { ContactListBox } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log('contacts', contacts);
  const filterValue = useSelector(getFilter);
  const normalizedFilter = filterValue.toLowerCase();
  console.log('filterValue', filterValue);
  console.log('getContacts', ...contacts);

  //функція (метод) отримання контактів для відмальовки у листі (фільтр -  не чутливий до регістру)

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  console.log('getVisibleContacts', getVisibleContacts);

  return (
    <ContactListBox>
      {getVisibleContacts.length > 0 ? (
        getVisibleContacts.map(contact => (
          <ContactListItem contact={contact} key={contact.id} />
        ))
      ) : (
        <h4>Phonebook is empty</h4>
      )}
    </ContactListBox>
  );
};

// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onRemove: PropTypes.func,
// };
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   onRemove: PropTypes.func,
// };
