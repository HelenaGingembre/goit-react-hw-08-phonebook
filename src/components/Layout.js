import { Outlet } from 'react-router-dom';
import React from 'react';
import { ToastContainer /*, toast */ } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <>
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
      <ToastContainer autoClose={2000} theme="colored" />
    </>
  );
};
