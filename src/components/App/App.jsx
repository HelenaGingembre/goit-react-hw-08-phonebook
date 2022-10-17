import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Container } from './Container/Container';
import { Section } from '../Section/Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';

export class App extends Component {
  // публична властивість state - завжди об'єкт, від  його властивості залежить розмітка
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  //метод обробки контактів який додає новий контакт
  addContact = data => {
    console.log('newContact', data);
    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, data],
      }),
      alert('New contact is add in your phonebook')
    );
  };
  getVisibleContacts = () => {
    const { contacts } = this.state;
    return contacts;
  };

  //функция (метод) проверки на уникальность контактов
  checkUniqueContact = name => {
    //берем наши контакты из state
    const { contacts } = this.state;
    //перевіряємо наявність контакту в масиві контактів
    //ставим !! якщо щось знайдеться то отримаємо true в протилежному випадку false
    const isExistContact = !!contacts.find(contact => contact.name === name);
    //якщо існує контакту, то виводимо повідомленні
    isExistContact && alert('Contact is already exist in your phonebook');
    //ставимo інверсію (якщо не існує контакту, тобто він унікальний)
    return !isExistContact;
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            onSubmit={this.addContact}
            onCheckUnique={this.checkUniqueContact}
          />
        </Section>
        <Section title="Contacts">
          <h3>Find contacts by name</h3>
          <ContactList contacts={visibleContacts} />
        </Section>
      </>
    );
  }
}
