import { useState } from 'react';
import { nanoid } from 'nanoid';
import { selectContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operation';
import Typography from '@mui/material/Typography';
import ContactsIcon from '@mui/icons-material/Contacts';
import {
  ifSuccessfulAdditionAlert,
  ifDublicateNameAlert,
  ifDublicateNumberAlert,
} from '../../notiflix';
import {
  SectionForm,
  Form,
  Label,
  Input,
  Button,
  Box,
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
      ifDublicateNameAlert({ name });
      return;
    }
    if (isExistNumber(number)) {
      ifDublicateNumberAlert({ number });
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));
    ifSuccessfulAdditionAlert();
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <SectionForm>
      <Box>
        <ContactsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Contact Book
        </Typography>
      </Box>
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
