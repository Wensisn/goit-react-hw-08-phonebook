import { useSelector } from 'react-redux';
import { getIsLoggenIn } from 'redux/auth/selectors';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { Filter } from '../components/Filter/Filter';
import { Indent } from '../components/ContactsList/contactsList.styled';
import { Loader } from 'components/Loader/Loader';

export const Contacts = () => {
  const isLoggenIn = useSelector(getIsLoggenIn);
  return (
    <>
      {isLoggenIn && <ContactsForm />}
      {isLoggenIn && <Filter />}
      {isLoggenIn && <ContactsList />}
      {!isLoggenIn && <Loader />}
      <Indent />
    </>
  );
};
