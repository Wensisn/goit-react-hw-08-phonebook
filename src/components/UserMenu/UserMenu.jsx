import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../redux/auth/operation';
import { getUsername } from '../../redux/auth/selectors';

import Button from '@mui/material/Button';
import PersonPinIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';

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
    <Box sx={{ display: `flex`, alignItems: `center` }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}
      >
        Welcome ,{name} <PersonPinIcon sx={{ fontSize: 40 }}></PersonPinIcon>
      </Typography>
      <Button
        variant="contained"
        endIcon={<LogoutIcon />}
        onClick={handleFormSubmit}
      >
        Go out
      </Button>
    </Box>
  );
};
