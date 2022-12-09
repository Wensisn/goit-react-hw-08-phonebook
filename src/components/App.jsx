import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Contacts } from '../pages/Contacts';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { getIsLoggenIn } from '../redux/auth/selectors';
import { fetchCurrentUser } from '../redux/auth/operation';
import { ResponsiveAppBar } from './ResponsiveAppBar/ResponsiveAppBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense } from 'react';

export const App = () => {
  const distpath = useDispatch();
  const isLoggenIn = useSelector(getIsLoggenIn);

  useEffect(() => {
    distpath(fetchCurrentUser());
  }, [distpath]);

  return (
    <>
      <ResponsiveAppBar />
      <Suspense fallback={<div>h</div>}>
        <Routes>
          <Route index element={<Home />} />
          {isLoggenIn && <Route index element={<Contacts />} />}
          <Route path="home" exact element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
