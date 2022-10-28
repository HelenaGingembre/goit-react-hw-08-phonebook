import React, { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import initialContacts from '../../data/contacts.json';

import 'react-toastify/dist/ReactToastify.css';
import { Section } from '../Section/Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { FilterInput } from '../FilterInput/FilterInput';
import { Container } from 'components/Container/Container';

// const parseDataFromLS = (key, initialValue = []) => {
//   try {
//     return JSON.parse(localStorage.getItem(key)) ?? initialValue;
//   } catch (error) {
//     return initialValue;
//   }
// };

export function App() {
  // публічна властивість state - завжди об'єкт
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || initialContacts || []
  );
  const [filterContacts, setFilterContacts] = useState('');

  //будемо міняти state: filter
  const filterChange = filter => setFilterContacts({ filter });
  //функція (метод) отримання контактів для відмальовки у листі (фільтр -  не чутливий до регістру)
  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    );
  };

  //функція (метод) перевірка на унікальність контактів
  const checkUniqueContact = name => {
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
  const addContact = newContact => {
    console.log('newContact', newContact);

    if (checkUniqueContact(newContact.name)) {
      setContacts(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
      toast.success(
        `New contact- "${newContact.name}" is add in your phonebook`
      );
    }
  };

  //функція (метод) видаляє контакт по Id
  const removeContact = id => {
    setContacts(prevContacts => {
      return {
        contacts: prevContacts.filter(contact => contact.id !== id),
      };
    });
    toast.success(`Contact is delete`);
  };

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm
          onSubmit={addContact}
          // onCheckUnique={this.checkUniqueContact}
        />
      </Section>
      <Section title="Contacts">
        {getVisibleContacts.length > 0 ? (
          <Container>
            <h4>Find contacts by name</h4>
            <FilterInput filter={filterContacts} onChange={filterChange} />
            <ContactList
              contacts={getVisibleContacts}
              onRemove={removeContact}
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
