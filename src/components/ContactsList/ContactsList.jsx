import { useDispatch, useSelector } from 'react-redux';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { allContacts } from '../../redux/contacts/operation';
import { selectVisibleTasks } from '../../redux/contacts/selectors';
import { List } from './contactsList.styled';
import { useEffect } from 'react';
import * as React from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleTasks);

  return (
    <>
      <List>
        {filteredContacts.map(item => (
          <ContactsItem
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </List>
    </>
  );
};
