import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input } from './ContactForm.styled';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
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
    const { name } = this.state;
    console.log('this.state name', { name });
    const isValidateForm = this.validateForm();
    // перевіряємо якщо  форма не валідна робимо вихід
    if (!isValidateForm) return;
    // якщо все ок визвем метод onAdd та поревнемо в нього контакт name
    this.props.onSubmit({ id: nanoid(6), name });
    console.log('onSubmit this.state name', this.state);
    Form.reset();
  };

  // валідатор форми
  validateForm = () => {
    console.log('зайшли у валіацію');
    const { name } = this.state;

    //перевіряємо що в нас name  не пустий
    if (!name) {
      alert('Name is empty');
      return false;
    }
    console.log('вийшли з валіаціі');
  };
  render() {
    // берем із state ім'я
    const { name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} key={this.state.id}>
        <Label htmlFor="name">
          Name
          <Input
            id="name"
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
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

ContactForm.propType = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
