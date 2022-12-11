import { useSelector } from 'react-redux';
import { getIsLoggenIn } from 'redux/auth/selectors';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { Filter } from '../components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import ListItemText from '@mui/material/ListItemText';

import Box from '@mui/material/Box';

export const Contacts = () => {
  const isLoggenIn = useSelector(getIsLoggenIn);
  return (
    <Box
      sx={{
        display: `flex`,
        justifyContent: `center`,
        flexDirection: `column`,
        alignItems: `center`,
        gap: `100px`,
      }}
    >
      {isLoggenIn && <ContactsForm />}
      {isLoggenIn && <Filter />}
      {isLoggenIn && <ContactsList />}
      {!isLoggenIn && <Loader />}
      <ListItemText sx={{ marginBottom: `800px` }} />
    </Box>
  );
};
