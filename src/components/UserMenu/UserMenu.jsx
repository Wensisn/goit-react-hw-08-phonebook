import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../redux/auth/operation';
import { getUsername } from '../../redux/auth/selectors';
import { Span } from './UserMenu.styled';

import Button from '@mui/material/Button';
import PersonPinIcon from '@mui/icons-material/AccountCircle';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(logOutUser());
    navigate('/login', { replace: true });
  };

  return (
    <>
      <Span>
        Welcome ,{name} <PersonPinIcon sx={{ fontSize: 40 }} />
      </Span>
      <Button
        sx={{ my: 2, color: 'white', display: 'block' }}
        variant="outlined"
        onClick={handleFormSubmit}
      >
        Go out
      </Button>
    </>
  );
};
