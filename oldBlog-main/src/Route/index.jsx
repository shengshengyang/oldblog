import React from 'react';
import { Suspense } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { configureFakeBackend } from '../Services/fack.backend';
import Callback from '../Auth/Callback';
import Loader from '../Layout/Loader';
import LayoutRoutes from '../Route/LayoutRoutes';
import PrivateRoute from './PrivateRoute';
import { classes } from '../Data/Layouts';
import { authRoutes } from './AuthRoutes';

// setup fake backend
configureFakeBackend();
const Routers = () => {
  const defaultLayoutObj = classes.find((item) => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();

  return (
    <HashRouter basename={'/'}>
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={'/'} element={<PrivateRoute />}>
                <>
                  <Route exact path={`/`} element={<Navigate to={`${process.env.PUBLIC_URL}/${layout}`} />} />
                </>
              <Route path={`/*`} element={<LayoutRoutes />} />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} />
            {authRoutes.map(({ path, Component }, i) => (
              <Route path={path} element={Component} key={i} />
            ))}
          </Routes>
        </Suspense>
      </>
    </HashRouter>
  );
};

export default Routers;
