import React, { lazy } from 'react';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { NotFound } from '../pages/NotFound';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
