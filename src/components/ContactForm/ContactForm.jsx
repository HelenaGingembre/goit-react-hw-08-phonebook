import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Btn } from './ContactForm.styled';
import { nanoid } from 'nanoid';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // обробник інпута в onChange
  const handleChangeForm = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const resetForm = () => [setName(''), setNumber('')];

  // обробник submit форми
  const handleSubmit = event => {
    event.preventDefault();
    // берем із state ім'я

    // якщо все ок визвем метод onSubmit та поревнемо в нього контакт name, number
    onSubmit({ id: nanoid(6), name, number });

    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChangeForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="name">
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Enter number telephone"
          value={number}
          onChange={handleChangeForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};

ContactForm.propType = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
