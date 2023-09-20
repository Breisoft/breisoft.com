import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { GithubProfile, Hero, RepoAccordion } from './components';

const Portfolio = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <GithubProfile />
        <RepoAccordion />
      </Container>
      <Container></Container>
    </Main>
  );
};

export default Portfolio;
