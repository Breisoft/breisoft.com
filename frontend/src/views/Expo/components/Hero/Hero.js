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

import HeroParticles from '../HeroParticles/HeroParticles';

import Container from 'components/Container';

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
        Crafting Digital Masterpieces with Modern Technologies
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
        At Breisoft, we specialize in dynamic
        <span style={{ color: '#44B78B' }}> Django</span> backends, interactive
        <span style={{ color: '#61DAFB' }}> React </span>
        interfaces, and insightful web scraping solutions. Our top-notch
        software engineering services are trusted by startups and established
        businesses alike.
      </Typography>
    </Box>
  );

  const GridItemFormBlock = () => {
    const initialValues = {
      fullName: '',
      email: '',
      password: '',
    };

    const onSubmit = (values) => {
      return values;
    };

    const formik = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

    return (
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={1}
        component={Card}
        boxShadow={1}
        color={'black'}
      >
        <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            sx={{
              fontWeight: 1000,
              color: '#377dff',
            }}
          >
            Reach Out
          </Typography>

          <Box display="flex" flexDirection={'column'}>
            <Box marginBottom={4}>
              <TextField
                sx={{ height: 54 }}
                label="Full name"
                variant="outlined"
                color="primary"
                size="medium"
                name="fullName"
                fullWidth
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Box>
            <Box marginBottom={4}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box marginBottom={4}>
              <TextField
                sx={{
                  height: 75,
                  textarea: {
                    maxHeight: '50px', // Adjust this value as needed
                    overflowY: 'auto',
                  },
                }}
                label="Inquiry"
                variant="outlined"
                color="primary"
                size="medium"
                name="inquiry"
                multiline
                rows={4} // Adjust this value as needed
                fullWidth
                value={formik.values.inquiry}
                onChange={formik.handleChange}
                error={formik.touched.inquiry && Boolean(formik.errors.inquiry)}
                helperText={formik.touched.inquiry && formik.errors.inquiry}
              />
            </Box>
            <Box>
              <Button
                sx={{ height: 54 }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    );
  };

  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        marginTop: -13,
        paddingTop: 13,
        backgroundColor: theme.palette.alternate.main,
        background:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://as2.ftcdn.net/v2/jpg/03/25/01/55/1000_F_325015501_0OREXfdOKXVEkRb3CoULxDDMgGy9gPNW.jpg) no-repeat center',
        backgroundSize: 'cover',
        zindex: 2,
      }}
    >
      <HeroParticles stlye={{ zIndex: 2 }} />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 74%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />

      <Container position={'relative'} zIndex={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <GridItemHeadlineBlock />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <GridItemFormBlock />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
