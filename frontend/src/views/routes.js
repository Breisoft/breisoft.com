import React from 'react';

import {
  Home as HomeView,
  About as AboutView,
  SigninSimple as SigninSimpleView,
  SignupSimple as SignupSimpleView,
  NotFound as NotFoundView,
  Expo as ExpoView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: '/expo',
    renderer: (params = {}) => <ExpoView {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <AboutView {...params} />,
  },
  {
    path: '/signin',
    renderer: (params = {}) => <SigninSimpleView {...params} />,
  },
  {
    path: '/signup',
    renderer: (params = {}) => <SignupSimpleView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
];

export default routes;
