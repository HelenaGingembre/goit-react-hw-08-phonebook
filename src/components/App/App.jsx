import React, { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import initialContacts from '../../data/contacts.json';

import 'react-toastify/dist/ReactToastify.css';
import { Section } from '../Section/Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { FilterInput } from '../FilterInput/FilterInput';
import { Container } from 'components/Container/Container';

export function App() {
  // публічна властивість state - завжди об'єкт
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || initialContacts || []
  );
  const [filterContacts, setFilterContacts] = useState('');

  const filterChange = filter => setFilterContacts(filter);

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
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      //якщо існує контакту, то виводимо повідомленні
      toast.error(`${name} is already in contacts`);
      return false;
    } else return true; //(якщо не існує контакту, тобто він унікальний)
  };

  //метод обробки контактів який додає новий контакт
  const addContact = newContact => {
    console.log('newContact', newContact);

    if (checkUniqueContact(newContact.name)) {
      setContacts(contacts => [...contacts, newContact]);
      toast.success(
        `New contact- "${newContact.name}" is add in your phonebook`
      );
    }
  };

  //функція (метод) видаляє контакт по Id
  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    toast.success(`Contact is delete`);
  };

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const visibleContacts = getVisibleContacts();
  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        {visibleContacts.length > 0 ? (
          <Container>
            <h4>Find contacts by name</h4>
            <FilterInput filter={filterContacts} onChange={filterChange} />
            <ContactList contacts={visibleContacts} onRemove={removeContact} />
          </Container>
        ) : (
          <h4>Phonebook is empty</h4>
        )}
        <ToastContainer autoClose={2000} />
      </Section>
    </>
  );
}
