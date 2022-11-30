import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoneBooks } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { ToastContainer /*, toast*/ } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Section } from '../Section/Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { FilterInput } from '../FilterInput/FilterInput';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPhoneBooks());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Container>
          <h4>Find contacts by name</h4>
          <FilterInput />
          {isLoading && !error && <Loader />}
          <ContactList />
        </Container>
        <ToastContainer autoClose={2000} />
      </Section>
    </>
  );
}
