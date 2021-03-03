import React from 'react';
import { Redirect } from 'react-router-dom';
import Route from '../models/Route';
 import Login from '../containers/login';
// import Register from 'containers/Auth/Register/Register';

const authRoutes: Route[] = [
  {
    exact: true,
    path: '/',
    component: function renderRedirect() {
      return <Redirect to="/login" />;
    },
    name: 'Auth',
  },
  {
    exact: true,
    path: '/login',
    component: Login,
    name: 'Auth',
  },
  // {
  //   exact: true,
  //   path: '/register',
  //   component: Register,
  //   name: 'Auth',
  // },
];

export default authRoutes;
