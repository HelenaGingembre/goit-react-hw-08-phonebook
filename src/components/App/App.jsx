import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoneBooks } from '../../redux/operations';

import { ToastContainer /*, toast*/ } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Section } from '../Section/Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { FilterInput } from '../FilterInput/FilterInput';
import { Container } from 'components/Container/Container';

export function App() {
  const dispatch = useDispatch();
  // const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchPhoneBooks);
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">{/* <ContactForm /> */}</Section>
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
