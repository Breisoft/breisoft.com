import React from 'react';

const HomeView = React.lazy(() => import('views/Home'));
const AboutView = React.lazy(() => import('views/About'));
const PortfolioView = React.lazy(() => import('views/Portfolio'));
const NotFoundView = React.lazy(() => import('views/NotFound'));
const ChatView = React.lazy(() => import('views/Chat'));

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
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
];

export default routes;
