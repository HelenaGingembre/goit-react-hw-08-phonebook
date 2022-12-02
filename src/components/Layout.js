import { Outlet } from 'react-router-dom';
import { ToastContainer /*, toast */ } from 'react-toastify';

import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '5px 16px' }}>
      <AppBar />
      <Suspense
        fallback={
          <div>
            Loading...
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
