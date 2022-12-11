import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/auth/operation';
import { useNavigate } from 'react-router-dom';

import {
  ifValidNameAlert,
  ifValidEmailAlert,
  ifValidPasswordAlert,
} from '../../notiflix';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

export const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleFormSubmit = event => {
    event.preventDefault();

    if (name === '') {
      return ifValidNameAlert();
    }

    if (email === '') {
      return ifValidEmailAlert();
    }

    if (password === '') {
      return ifValidPasswordAlert();
    }

    dispatch(signupUser({ name, email, password }));
    resetForm();
    navigate('/contacts', { replace: true });
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        background: `linear-gradient(45deg, #fc466b, #3f5efb)`,
        marginTop: `50px`,
        position: `absolute`,
        transform: `translate(-50%, -50%)`,
        top: `50%`,
        left: ` 50%`,
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          color: `#fff`,
          opacity: `0.7`,
          fontSize: `1.4rem`,
          textShadow: `2px 2px 4px rgba(0, 0, 0, 0.2)`,
          fontWeight: 700,
          letterSpacing: '.3rem',
          textDecoration: 'none',
          marginBottom: `20px`,
        }}
      >
        Sign Up
        <LoginIcon
          sx={{
            display: { xs: 'none', md: 'flex' },
            mr: 1,
          }}
        />
      </Typography>
      <Box
        onSubmit={handleFormSubmit}
        component="form"
        sx={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
          background: `rgba(255, 255, 255, 0.3)`,
          padding: `3em`,
          height: `320px`,
          borderRadius: `20px`,
          borderLeft: `1px solid rgba(255, 255, 255, 0.3)`,
          borderTop: ` 1px solid rgba(255, 255, 255, 0.3)`,
          backdropFilter: `blur(10px)`,
          boxShadow: `20px 20px 40px -6px rgba(0, 0, 0, 0.2)`,
          textAlign: `center`,
          position: `relative`,
          transition: `all 0.2s ease-in-out`,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{
            borderRadius: `5000px`,
            background: `transparent`,
            marginBottom: `2em`,
          }}
          id={nameInputId}
          label="Name"
          type="name"
          name="name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        <TextField
          sx={{
            borderRadius: `5000px`,
            background: `transparent`,
            marginBottom: `2em`,
          }}
          id={emailInputId}
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        />
        <TextField
          sx={{
            borderRadius: `5000px`,
            background: `transparent`,
            marginBottom: `2em`,
          }}
          id={passwordInputId}
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          sx={{ color: `#fff` }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};
