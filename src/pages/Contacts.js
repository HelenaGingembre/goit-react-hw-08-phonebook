import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchPhoneBooks } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
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

  // console.log('fetchPhoneBooks ', fetchPhoneBooks());
  useEffect(() => {
    dispatch(fetchPhoneBooks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
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
