import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/auth/operation';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import {
  SectionForm,
  Form,
  Label,
  Input,
  Text,
} from '../LoginForm/loginForm.styled';

export const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(signupUser({ name, email, password }));
    resetForm();
    navigate('/contacts', { replace: true });
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <SectionForm>
      <Text>Sign Up</Text>

      <Form onSubmit={handleFormSubmit}>
        <Label htmlFor={nameInputId}>
          <Input
            placeholder="Name"
            type="text"
            name="name"
            required
            value={name}
            id={nameInputId}
            onChange={e => setName(e.currentTarget.value)}
          />
        </Label>
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
        <Button variant="contained" type="submit">Sign Up</Button>
      </Form>
    </SectionForm>
  );
};
