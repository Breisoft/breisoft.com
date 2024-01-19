/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import BaseHero from 'components/BaseHero';

import CreditCards from 'svg/illustrations/CreditCards';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify your password')
    .min(8, 'The password should have at minimum length of 8'),
});

const Hero = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box marginBottom={4} data-aos="fade-up">
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 900,
          color: 'common.white',
        }}
      >
        Custom Tailored Pricing Just For You
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        sx={{
          fontWeight: 500,
          color: 'common.white',
        }}
      >
        We've tailored this pricing just for you, reflecting your unique
        requirements: Discover our{' '}
        <span style={{ color: '#44B78B' }}>dynamic</span> capabilities, benefit
        from our <span style={{ color: '#61DAFB' }}>interactive</span>{' '}
        expertise, and see the value in our tailored solutions. At Breisoft, our
        pursuit of excellence ensures that we consistently deliver beyond
        expectations.
      </Typography>
    </Box>
  );

  return (
    <BaseHero>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            width={1}
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CreditCards width={500} height={500} />
          </Box>
        </Grid>
      </Grid>
    </BaseHero>
  );
};

export default Hero;
