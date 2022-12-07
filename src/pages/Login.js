// import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { TitlePage } from '../components/Title/Title';

export default function Login() {
  return (
    <main>
      <TitlePage>Log in to Phonebook</TitlePage>

      <LoginForm />
    </main>
  );
}
