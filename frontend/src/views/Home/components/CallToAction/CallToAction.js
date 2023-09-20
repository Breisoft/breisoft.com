/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const CallToAction = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              color={'primary'}
              component={'span'}
              variant="h4"
              sx={{ fontWeight: 700 }}
            >
              Have Web Development Questions? Get Immediate Answers.
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Enter your email to chat with us right now. We're here 24/7 to
              help you.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Box
              component={'form'}
              noValidate
              autoComplete="off"
              sx={{
                '& .MuiInputBase-input.MuiOutlinedInput-input': {
                  bgcolor: 'background.paper',
                },
              }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <Box
                  flex={'1 1 auto'}
                  component={TextField}
                  label="Enter your email"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  height={54}
                />
                <Box
                  component={Button}
                  variant="contained"
                  color="primary"
                  size="large"
                  height={54}
                  style={{ width: '25%' }}
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                >
                  Chat
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={1} width={1} maxHeight={600}>
            <Box
              component={'img'}
              loading="lazy"
              title="img"
              width="100%"
              height="100%"
              minHeight={320}
              src="images/customer-support.jpg"
              boxShadow={4}
              borderRadius={2}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
