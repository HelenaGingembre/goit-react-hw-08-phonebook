import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Container } from './Container/Container';
import { Section } from '../Section/Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';

export class ContactsWidget extends Component {
  // публична властивість state - завжди об'єкт, від  його властивості залежить розмітка
  state = {
    contacts: [],
    name: '',
  };
  //метод обробки контактів який додає новий контакт
  addContact = data => {
    console.log('newContact', data);
    this.setState(
      ({ contacts }) => ({
        contacts: [...contacts, data],
      }),
      alert('New contact is add in your phonebook')
    );
  };
  getVisibleContacts = () => {
    const { contacts } = this.state;
    return contacts.map(contact => contact.name.toLowerCase());
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { contacts } = this.state.contacts;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            contacts={contacts}
            onSubmit={this.addContact}
            // onCheckUnique={this.handleCheckUniqueContact}
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
