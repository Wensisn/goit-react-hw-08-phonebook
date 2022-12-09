import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operation';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import { SectionForm, Form, Label, Input, Text } from './loginForm.styled';

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
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
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
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            value={password}
            id={passwordInputId}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </Label>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Form>
    </SectionForm>
  );
};
