import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../redux/mySlice/mySlice';

export const Layout = () => {
  return (
    <>
      <div>
        <AppBar />
        <Outlet />
      </div>
    </>
  );
};
