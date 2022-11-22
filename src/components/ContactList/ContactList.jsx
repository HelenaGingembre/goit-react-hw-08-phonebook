// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
// import { toast } from 'react-toastify';
import { ContactListItem } from '../ContactItem/ContactItem';
import {
  // ContactListLi,
  ContactListBox,
  // ButtonDelete,
} from './ContactList.styled';

// const ContactListItem = ({ id, name, number, onRemove }) => {
//   return (
//     <ContactListLi>
//       {name}: {number}
//       <ButtonDelete onClick={() => onRemove(id)}>Delete</ButtonDelete>
//     </ContactListLi>
//   );
// };

// export const ContactList = ({ contacts, onRemove }) => {
export const ContactList = () => {
  const contacts = useSelector(getContacts.items);
  console.log(getFilter);
  const filterValue = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  // const statusFilter = useSelector(getStatusFilter);
  const visibleContacts = getVisibleContacts();

  // if (contacts.length === 0) return null;
  return (
    <ContactListBox>
      {visibleContacts.map(contact => (
        // <ContactListItem {...contact} key={id} onRemove={onRemove} />
        <ContactListItem contact={contact} />
      ))}
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
