import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggenIn } from '../../redux/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { Container, Header, Link, Nav, Block } from './appBar.styled';

export const AppBar = () => {
  const isLoggenIn = useSelector(getIsLoggenIn);
  return (
    <Container>
      <Header>
        <Nav>
          {isLoggenIn && (
            <Block>
              <Link to="contacts">Contacts</Link>
            </Block>
          )}
          {isLoggenIn && <UserMenu />}
          <Link to="/" end>
            Home
          </Link>
          {!isLoggenIn && <Link to="login">Log In</Link>}
          {!isLoggenIn && <Link to="register">Sign Up</Link>}
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}></Suspense>
    </Container>
  );
};
