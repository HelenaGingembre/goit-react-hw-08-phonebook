import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Btn } from './ContactForm.styled';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = INITIAL_STATE;

  // обробник інпута в onChange
  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  // обробник submit форми
  handleSubmit = event => {
    event.preventDefault();
    // берем із state ім'я
    const { name, number } = this.state;
    console.log('this.state name', this.state);
    const isValidateForm = this.validateForm();
    // перевіряємо якщо  форма не валідна робимо вихід
    if (!isValidateForm) return;
    // якщо все ок визвем метод onSubmit та поревнемо в нього контакт name, number
    this.props.onSubmit({ id: nanoid(6), name, number });
    console.log('onSubmit this.state name', this.state);

    this.resetForm();
  };

  //метод для очистки формы после отправки данных
  resetForm = () => this.setState(INITIAL_STATE);

  // валідатор форми
  validateForm = () => {
    console.log('зайшли у валіацію');
    const { name, number } = this.state;

    //перевіряємо що в нас name  не пустий
    if (!name || !number) {
      alert('Name or number  is empty');
      return false;
    }
    console.log('вийшли з валіаціі');
    // функция проверяет есть ли такой контакт в списке контактов
    return this.props.onCheckUnique(name);
  };
  render() {
    // берем із state ім'я і телефон
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} key={this.state.id}>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChangeForm}
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
            onChange={this.handleChangeForm}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </Form>
    );
  }
}

ContactForm.propType = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
