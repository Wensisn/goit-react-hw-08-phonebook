import { useState } from 'react';
import { nanoid } from 'nanoid';
import { selectContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operation';

import {
  SectionForm,
  Form,
  Label,
  Input,
  Button,
  Text,
} from './contactsForm.styled';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items } = useSelector(selectContacts);

  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const isExistName = name => {
    return items.some(item => item.name === name);
  };

  const isExistNumber = number => {
    return items.some(item => item.number === number);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (isExistName(name)) {
      alert(`${name} is already in name.`);
      return;
    }
    if (isExistNumber(number)) {
      alert(`${number} is already in number.`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <SectionForm>
      <Text>Contact book</Text>

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
        <Label htmlFor={numberInputId}>
          <Input
            placeholder="Number"
            type="tel"
            name="number"
            required
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            id={numberInputId}
            onChange={e => setNumber(e.currentTarget.value)}
          />
        </Label>
        <Button type="submit">Add a contact</Button>
      </Form>
    </SectionForm>
  );
};
