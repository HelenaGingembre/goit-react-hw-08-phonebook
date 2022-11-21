import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/action';
// import { MdClose } from 'react-icons-md';
import { ContactListLi, ButtonDelete } from '../ContactList/ContactList.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(removeContact(id));

  return (
    <ContactListLi>
      {name}: {number}
      <ButtonDelete onClick={handleDelete}>
        x{/* <MdClose size={24} /> */}
      </ButtonDelete>
    </ContactListLi>
  );
};
