import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Btn,
  Divbtn,
  Form,
  Input,
  Label,
} from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Divbtn>
        <Btn type="submit">Log In</Btn>
      </Divbtn>
    </Form>
  );
};
