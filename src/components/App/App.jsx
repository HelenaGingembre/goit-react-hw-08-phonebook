import { React, Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Section } from '../Section/Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { FilterInput } from '../FilterInput/FilterInput';
import { Container } from 'components/Container/Container';

export class App extends Component {
  // публічна властивість state - завжди об'єкт
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
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
    toast.success('New contact is add in your phonebook');
  };

  //будемо міняти state: filter
  filterChange = filter => this.setState({ filter });
  //функція (метод) отримання контактів для відмальовки у листі (фільтр -  не чутливий до регістру)
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  //функція (метод) перевірка на унікальність контактів
  checkUniqueContact = name => {
    //беремо контакти із state
    const { contacts } = this.state;
    //перевіряємо наявність контакту в масиві контактів
    //ставим !! якщо щось знайдеться то отримаємо true в протилежному випадку false
    const isExistContact = !!contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    //якщо існує контакту, то виводимо повідомленні
    isExistContact && toast.error(`${name} is already in contacts`); //&&
    // alert`${name} is already in contacts`;
    //ставимo інверсію (якщо не існує контакту, тобто він унікальний)
    return !isExistContact;
  };

  //функція (метод) видаляє контакт по Id
  removeContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
    toast.success(`Contact is delete`);
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            onSubmit={this.addContact}
            onCheckUnique={this.checkUniqueContact}
          />
        </Section>
        <Section title="Contacts">
          {visibleContacts.length > 0 ? (
            <Container>
              <h4>Find contacts by name</h4>
              <FilterInput filter={filter} onChange={this.filterChange} />
              <ContactList
                contacts={visibleContacts}
                onRemove={this.removeContact}
              />
            </Container>
          ) : (
            <h4>Phonebook is empty</h4>
          )}
          <ToastContainer autoClose={2000} />
        </Section>
      </>
    );
  }
}
