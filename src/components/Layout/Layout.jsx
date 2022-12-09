import { Outlet } from 'react-router-dom';
import { ResponsiveAppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <div>
        <ResponsiveAppBar />
        <Outlet />
      </div>
    </>
  );
};
