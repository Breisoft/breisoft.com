/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Typography
        variant={'h3'}
        gutterBottom
        sx={{ fontWeight: 700, textAlign: 'center' }}
      >
        Breisoft
      </Typography>
      <Divider />
      <br />
      <br />

      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Who are we?
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              Breisoft is an organization committed to excellence at every step.
              We believe in continual growth, hard work, and exceeding
              expectations consistently. Our commitment isn't fulfilled until
              you're 100% satisfied.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our process
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              When you work with us, we delve deep to understand your company's
              needs. We actively seek to ask the right questions, ensuring we
              grasp your project requirements with full clarity. Our goal is to
              anticipate your needs before they even arise.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
