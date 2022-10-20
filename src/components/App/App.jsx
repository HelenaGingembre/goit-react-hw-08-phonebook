import { React, Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import initialContacts from '../../data/contacts.json';

import 'react-toastify/dist/ReactToastify.css';
import { Section } from '../Section/Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { FilterInput } from '../FilterInput/FilterInput';
import { Container } from 'components/Container/Container';

export class App extends Component {
  // публічна властивість state - завжди об'єкт
  state = {
    contacts: [],
    filter: '',
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

    //ставимo інверсію (якщо не існує контакту, тобто він унікальний)
    return !isExistContact;
  };
  //метод обробки контактів який додає новий контакт
  addContact = data => {
    console.log('newContact', data);

    if (this.checkUniqueContact(data.name)) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
      toast.success(`New contact- "${data.name}" is add in your phonebook`);
    }
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

  componentDidMount() {
    console.log('componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    } else {
      this.setState({ contacts: initialContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      console.log('update setState');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      console.log(
        'localStorage',
        localStorage.getItem('contacts', JSON.stringify(this.state.contacts))
      );
    }
  }
  render() {
    console.log('add render');
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            onSubmit={this.addContact}
            // onCheckUnique={this.checkUniqueContact}
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
