// import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { TitlePage } from '../components/Title/Title';

export default function Register() {
  return (
    <main>
      <TitlePage>Create your account</TitlePage>

      <RegisterForm />
    </main>
  );
}
