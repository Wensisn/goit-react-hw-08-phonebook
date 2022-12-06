import { useState } from 'react';
import { nanoid } from 'nanoid';
// import { selectLogin } from '../redux/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/auth/operation';
import { useNavigate } from 'react-router-dom';

import {
  SectionForm,
  Form,
  Label,
  Input,
  Name,
  Button,
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

  // const isExistName = name => {
  //   return (item => item.name === name);
  // };

  // const isExistNumber = email => {
  //   return (item => item.email === email);
  // };

  // const isExistPassword = password => {
  //   return (item => item.password === password);
  // };

  const handleFormSubmit = event => {
    event.preventDefault();
    // if (isExistName(name)) {
    //   alert(`${name} is already in name.`);
    //   return;
    // }
    // if (isExistNumber(email)) {
    //   alert(`${email} is already in number.`);
    //   return;
    // }
    // if (isExistPassword(password)) {
    //   alert(`${password} is already in number.`);
    //   return;
    // }
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
        <Button type="submit">Sign Up</Button>
      </Form>
    </SectionForm>
  );
};
