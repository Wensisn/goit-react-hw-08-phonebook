import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../redux/auth/operation';
import { getUsername, getIsLoggenIn } from '../../redux/auth/selectors';
import { Container, Span, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const isLoggenIn = useSelector(getIsLoggenIn);

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(logOutUser());
    navigate('/login', { replace: true });
  };

  return (
    <Container>
      <Span>Welcome ,{name}</Span>
      <Button type="button" onClick={handleFormSubmit}>
        Go out
      </Button>
    </Container>
  );
};
