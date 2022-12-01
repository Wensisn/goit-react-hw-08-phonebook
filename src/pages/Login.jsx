import { useState } from 'react';
import { nanoid } from 'nanoid';
import { selectLogin } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userOperation';

import {
  SectionForm,
  Form,
  Label,
  Input,
  Name,
  Click,
  Text,
} from '../styledComponents/login.styled';

export const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { items } = useSelector(selectLogin);
  const dispatch = useDispatch;

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const isExistName = name => {
    return items.some(item => item.name === name);
  };

  const isExistNumber = email => {
    return items.some(item => item.email === email);
  };

  const isExistPassword = password => {
    return items.some(item => item.password === password);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (isExistName(name)) {
      alert(`${name} is already in name.`);
      return;
    }
    if (isExistNumber(email)) {
      alert(`${email} is already in number.`);
      return;
    }
    if (isExistPassword(password)) {
      alert(`${password} is already in number.`);
      return;
    }
    dispatch(addUser({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <SectionForm>
      <Text>PhoneBook</Text>

      <Form onSubmit={handleFormSubmit}>
        <Label htmlFor={nameInputId}>
          <Name>Name</Name>
          <Input
            type="text"
            name="name"
            required
            value={name}
            id={nameInputId}
            onChange={e => setName(e.currentTarget.value)}
          />
        </Label>
        <Label htmlFor={emailInputId}>
          <Name>email</Name>
          <Input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={email}
            id={emailInputId}
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </Label>
        <Label htmlFor={passwordInputId}>
          <Name>password</Name>
          <Input
            type="password"
            name="password"
            required
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={password}
            id={passwordInputId}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </Label>
        <Click type="submit">Add a contact</Click>
      </Form>
    </SectionForm>
  );
};
