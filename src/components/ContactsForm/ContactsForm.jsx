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
  ifValidNameAlert,
  ifValidNumberAlert,
} from '../../notiflix';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

    if (name === '') {
      return ifValidNameAlert();
    }

    if (number === '') {
      return ifValidNumberAlert();
    }

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
    <Box
      onSubmit={handleFormSubmit}
      component="form"
      sx={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        background: `rgba(255, 255, 255, 0.3)`,
        padding: `1em`,
        height: `320px`,
        width: `300px`,
        borderRadius: `20px`,
        marginTop: `30px`,
        boxShadow: `20px 20px 40px -6px rgba(0, 0, 0, 0.2)`,
        transition: `all 0.2s ease-in-out`,
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <ContactsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: `flex`,
          justifyContent: `center`,
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Contact Book
      </Typography>
      <TextField
        sx={{ borderRadius: `5000px`, background: `transparent` }}
        id={nameInputId}
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.currentTarget.value)}
      />
      <TextField
        sx={{ borderRadius: `5000px`, background: `transparent` }}
        id={numberInputId}
        label="Number"
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.currentTarget.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      />
      <Button
        type="submit"
        variant="contained"
        disableElevation
        sx={{ color: `#fff` }}
      >
        Add Contact
      </Button>
    </Box>
  );
};
