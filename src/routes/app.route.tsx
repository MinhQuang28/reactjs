import React from 'react';
import { Redirect } from 'react-router-dom';
import Route from '../models/Route';
 import Login from '../containers/login';

const appRoutes: Route[] = [
  {
    exact: true,
    path: '/',
    component: function renderRedirect() {
      return <Redirect to="/auth/login" />;
    },
    name: 'Auth',
  },
  {
    exact: true,
    path: '/login',
    component: Login,
    name: 'Auth',
  },
];

export default appRoutes;
