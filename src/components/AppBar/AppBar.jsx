// import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggenIn } from '../../redux/auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { Link, Nav , Background} from './appBar.styled';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


export const ResponsiveAppBar = () => {
  const isLoggenIn = useSelector(getIsLoggenIn);

  // const [anchorElUser, setAnchorElUser] = React.useState(null);


  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };


  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  return (
  
    <AppBar position="static">
        <Background>
    <Container maxWidth="xl">
      <Nav>
      <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
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
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
         
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            
            
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
        
              <MenuItem  >
                <Typography textAlign="center"></Typography>
              </MenuItem>
            
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
            <Button
              
              
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            {isLoggenIn && (
        
        <Link to="contacts">Contacts</Link>
    )}
    <Link to="/" end>
        Home
      </Link>
      {!isLoggenIn && <Link to="login">Log In</Link>}
      {!isLoggenIn && <Link to="register">Sign Up</Link>}
            </Button>
        </Box>
        <Box display='flex'
    alignItems='flex-end'> 
        {isLoggenIn && <UserMenu />}
        </Box>
      </Toolbar>
      </Nav>
    </Container>
    </Background>
  </AppBar>
  );
};




/* <Container>
<Header>
  <Suspense fallback={<div>Loading page...</div>}>
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
  </Suspense>
</Header>
</Container> */