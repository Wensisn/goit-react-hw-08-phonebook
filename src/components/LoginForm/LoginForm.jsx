import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operation';
import { useNavigate } from 'react-router-dom';

import {
  SectionForm,
  Form,
  Label,
  Input,
  Button,
  Text,
} from './loginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
    resetForm();
    navigate('/contacts', { replace: true });
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <SectionForm>
      <Text>Login</Text>

      <Form onSubmit={handleFormSubmit}>
        <Label htmlFor={emailInputId}>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            required
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={email}
            id={emailInputId}
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </Label>
        <Label htmlFor={passwordInputId}>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            required
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={password}
            id={passwordInputId}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </Label>
        <Button type="submit">Login</Button>
      </Form>
    </SectionForm>
  );
};
