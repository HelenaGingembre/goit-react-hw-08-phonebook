import PropTypes from 'prop-types';

import { ContactListLi, ContactListBox } from './ContactList.styled';

const ContactListItem = ({ id, name }) => {
  return <ContactListLi>{name}</ContactListLi>;
};

export const ContactList = ({ contacts }) => {
  //якщо список контактів ще немає, то розмітка не рендериться
  if (contacts.length === 0) return null;
  //якщо список контактів є то малюєм список
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
