import { useDispatch, useSelector } from 'react-redux';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { allContacts } from '../../redux/contacts/operation';
import { selectVisibleTasks } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleTasks);

  return (
    <>
     <Box sx={{ flexGrow: 1}} display='flex' justifyContent='center'>
<Grid  item xs={6} md={6}>
            <List sx={{ flexGrow: 1}} display='flex'
    gap='20'>
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
        </Box>
    </>
  );
};

        


        /* {filteredContacts.length > 0 && (
        <ContactBosx>
          <ContactList>
            {filteredContacts.map(item => (
              <ContactsItem
                key={item.id}
                id={item.id}
                name={item.name}
                number={item.number}
              />
            ))}
          </ContactList>
        </ContactBosx>
      )} */