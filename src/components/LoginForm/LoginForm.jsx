import { useState } from 'react';
import { nanoid } from 'nanoid';
// import { selectLogin } from '../redux/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
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

  // const isExistNumber = email => {
  //   return items.some(item => item.email === email);
  // };

  // const isExistPassword = password => {
  //   return items.some(item => item.password === password);
  // };

  const handleFormSubmit = event => {
    event.preventDefault();
    // if (isExistNumber(email)) {
    //   alert(`${email} is already in number.`);
    //   return;
    // }
    // if (isExistPassword(password)) {
    //   alert(`${password} is already in number.`);
    //   return;
    // }
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
