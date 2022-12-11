import { useDispatch, useSelector } from 'react-redux';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { allContacts } from '../../redux/contacts/operation';
import { selectVisibleTasks } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import * as React from 'react';

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleTasks);

  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}
    >
      <List
        sx={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          padding: 0,
          gap: `20px`,
        }}
      >
        {filteredContacts.map(item => (
          <ContactsItem
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </List>
    </Grid>
  );
};
