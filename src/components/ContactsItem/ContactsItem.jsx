import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operation';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      sx={{
        background: ` rgba(255, 255, 255, 0.3)`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        borderRadius: `6px`,
        transition: `transform 0.25s linear`,
        boxShadow: `1px 4px 6px rgb(0 0 0 / 16%), 0 4px 4px rgb(0 0 0 / 6%),
        0 1px 1px rgb(0 0 0 / 12%)`,
        color: `inherit`,
        listStyleType: `none`,
        width: `300px`,
      }}
    >
      <PersonOutlineIcon />
      <ListItemText
        sx={{
          display: `flex`,
          justifyContent: `flex-end`,
          textDecoration: `none`,
          fontSize: `18px`,
          color: `black`,
          margin: 0,
        }}
      >
        {name}:
      </ListItemText>

      <ListItemText primary={number} sx={{ margin: 0 }} />
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => dispatch(deleteContact(id))}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
