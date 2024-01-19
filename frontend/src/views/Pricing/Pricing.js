import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  Feedback,
  Contact,
  Description,
  Hero,
  AltPromoNumbers,
  CallToAction,
  Partners,
  Speakers,
} from './components';

const Pricing = () => {
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

export default Pricing;
