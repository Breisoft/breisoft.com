import React from 'react';

import {
  Home as HomeView,
  About as AboutView,
  Portfolio as PortfolioView,
  SigninSimple as SigninSimpleView,
  SignupSimple as SignupSimpleView,
  NotFound as NotFoundView,
  Chat as ChatView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <AboutView {...params} />,
  },
  {
    path: '/chat',
    renderer: (params = {}) => <ChatView {...params} />,
  },
  {
    path: '/portfolio',
    renderer: (params = {}) => <PortfolioView {...params} />,
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
