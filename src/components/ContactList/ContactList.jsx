import PropTypes from 'prop-types';

import { ContactListLi, ContactListBox } from './ContactList.styled';

const ContactListItem = ({ id, name, number }) => {
  return (
    <ContactListLi>
      {name}: {number}
    </ContactListLi>
  );
};

export const ContactList = ({ contacts }) => {
  if (contacts.length === 0) return null;
  return (
    <ContactListBox>
      {contacts.map((contact, id) => (
        <ContactListItem {...contact} key={id} />
      ))}
    </ContactListBox>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func,
};
