import { useDispatch, useSelector } from 'react-redux';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { ContactList, ContactBosx } from './contactsList.styled';
import { allContacts } from '../../redux/contacts/operation';
import { selectVisibleTasks } from '../../redux/contacts/selectors';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleTasks);

  return (
    <>
      {filteredContacts.length > 0 && (
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
      )}
    </>
  );
};
