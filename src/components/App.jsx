import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
