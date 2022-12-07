import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Btn, Divbtn, Form, Input, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="name">
        Username
        <Input type="text" name="name" />
      </Label>
      <Label htmlFor="email">
        Email
        <Input type="email" name="email" />
      </Label>
      <Label htmlFor="password">
        Password
        <Input type="password" name="password" />
      </Label>
      <Divbtn>
        <Btn type="submit">Register</Btn>
      </Divbtn>
    </Form>
  );
};
