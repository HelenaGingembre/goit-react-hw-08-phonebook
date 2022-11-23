// import React, { useState, useEffect } from 'react';
// import initialContacts from '../../data/contacts.json';

import { ToastContainer /*, toast*/ } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Section } from '../Section/Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { FilterInput } from '../FilterInput/FilterInput';
import { Container } from 'components/Container/Container';

export function App() {
  // публічна властивість state - завжди об'єкт
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) || initialContacts || []
  // );
  // const [filterContacts, setFilterContacts] = useState('');

  // const filterChange = filter => setFilterContacts(filter);

  //функція (метод) перевірка на унікальність контактів
  // const checkUniqueContact = name => {
  //   //перевіряємо наявність контакту в масиві контактів
  //   //ставим !! якщо щось знайдеться то отримаємо true в протилежному випадку false
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     //якщо існує контакт, то виводимо повідомленні
  //     toast.error(`${name} is already in contacts`);
  //     return false;
  //   } else return true; //(якщо не існує контакту, тобто він унікальний)
  // };

  //метод обробки контактів який додає новий контакт
  // const addContact = newContact => {
  //   console.log('newContact', newContact);

  //   if (checkUniqueContact(newContact.name)) {
  //     setContacts(contacts => [...contacts, newContact]);
  //     toast.success(
  //       `New contact- "${newContact.name}" is add in your phonebook`
  //     );
  //   }
  // };

  // useEffect(() => {
  //   if (contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // const visibleContacts = getVisibleContacts();
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Container>
          <h4>Find contacts by name</h4>
          <FilterInput />
          <ContactList />
        </Container>
        <ToastContainer autoClose={2000} />
      </Section>
    </>
  );
}
