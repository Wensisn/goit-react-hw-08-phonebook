import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operation';
import { Item, Info } from '../ContactsList/contactsList.styled';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <PersonOutlineIcon />
      <Info>{name}:</Info>
      <Info>{number}</Info>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => dispatch(deleteContact(id))}
      >
        <DeleteIcon />
      </IconButton>
    </Item>
  );
};
