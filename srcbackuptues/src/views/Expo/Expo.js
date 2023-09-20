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
  Partners,
  Speakers,
  VideoSection,
} from './components';

const Expo = () => {
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
          <VideoSection />
        </Container>
      </Box>
      <Container>
        <Speakers />
      </Container>
      <Divider />
      <About />
      <Box bgcolor={'primary.main'}>
        <Container paddingX={'0 !important'} maxWidth={1}>
          <Partners />
        </Container>
      </Box>
      <Container>
        <Contact />
      </Container>
    </Main>
  );
};

export default Expo;
