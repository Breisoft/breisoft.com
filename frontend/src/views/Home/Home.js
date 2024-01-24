import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Description,
  Hero,
  Feedback,
  AltPromoNumbers,
  CallToAction,
} from './components';

const Home = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Box bgcolor={'primary.main'}>
        <Container>
          <Description />
        </Container>
      </Box>
      <Container>
        <AltPromoNumbers />
      </Container>
      <Divider />
      <Container>
        <Feedback />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <CallToAction />
        </Container>
      </Box>
    </Main>
  );
};

export default Home;
