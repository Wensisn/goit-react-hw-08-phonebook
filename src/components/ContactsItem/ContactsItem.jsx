import { useDispatch } from 'react-redux';
import {
  ContactItem,
  ContactInfo,
  ContactButton,
  ContactBoxsInfo,
} from '../ContactsList/contactsList.styled';
import { deleteContact } from '../../redux/contacts/operation';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactItem key={id}>
        <ContactBoxsInfo>
          <ContactInfo>{name}:</ContactInfo>
          <ContactInfo>{number}</ContactInfo>
          <ContactButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ContactButton>
        </ContactBoxsInfo>
      </ContactItem>
    </>
  );
};
