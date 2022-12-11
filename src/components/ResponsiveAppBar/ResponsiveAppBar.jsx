import { useSelector } from 'react-redux';
import { getIsLoggenIn } from '../../redux/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { Link } from './appBar.styled';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ContactsIcon from '@mui/icons-material/Contacts';

export const ResponsiveAppBar = () => {
  const isLoggenIn = useSelector(getIsLoggenIn);
  return (
    <AppBar
      position="static"
      sx={{ background: `linear-gradient(45deg, #fc466b, #3f5efb)` }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ContactsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Contact Book
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              {isLoggenIn && <Link to="contacts">Contacts</Link>}

              {!isLoggenIn && (
                <Link to="home" end>
                  Home
                </Link>
              )}
              {!isLoggenIn && (
                <Link to="login" end>
                  Log In
                </Link>
              )}
              {!isLoggenIn && (
                <Link to="register" end>
                  Sign Up
                </Link>
              )}
            </Button>
          </Box>
          <Box display="flex" alignItems="flex-end">
            {isLoggenIn && <UserMenu />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
