// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
// import { toast } from 'react-toastify';
import { ContactListItem } from '../ContactItem/ContactItem';
import { ContactListBox } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  // console.log('getContacts', getContacts);

  //функція (метод) отримання контактів для відмальовки у листі (фільтр -  не чутливий до регістру)

  const getVisibleContacts = () => {
    // console.log('contacts', contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactListBox>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contact => (
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
