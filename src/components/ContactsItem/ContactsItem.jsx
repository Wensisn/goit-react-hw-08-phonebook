import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operation';
import {Background} from '../ContactsList/contactsList.styled'
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Background >
<ListItem secondaryAction={
  <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteContact(id))}>
  <DeleteIcon />
 </IconButton>
  }>
      <ListItemAvatar>
             <Avatar>
      <PersonOutlineIcon />
         </Avatar>
       </ListItemAvatar>
     <ListItemText

      primary={name}
 />
:
<ListItemText
      primary={number}
 />
 </ListItem>
    </Background>
  );
};
