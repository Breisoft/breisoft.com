import React from 'react';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Contact, Hero, Story, WhoWeAre } from './components';

const About = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <Story />
      </Container>
      <Container paddingTop={'0 !important'}>
        <WhoWeAre />
      </Container>
      <Container paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Contact />
    </Main>
  );
};

export default About;
