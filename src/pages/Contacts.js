import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoneBooks } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Outlet } from 'react-router-dom';

import { ToastContainer /*, toast*/ } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Section } from '../components/Section/Section';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { FilterInput } from '../components/FilterInput/FilterInput';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
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
        <Outlet></Outlet>
      </Section>
    </>
  );
}
