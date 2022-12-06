import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Contacts } from '../pages/Contacts';
import { Layout } from './Layout/Layout';
import { fetchCurrentUser } from '../redux/auth/operation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const distpath = useDispatch();

  useEffect(() => {
    distpath(fetchCurrentUser());
  }, [distpath]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};
