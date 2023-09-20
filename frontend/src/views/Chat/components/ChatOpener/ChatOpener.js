/* global tidioChatApi */

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

import Container from 'components/Container';
import { Divider } from '@mui/material';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import EmailInput from 'components/EmailInput';
import { Email } from '@mui/icons-material';

const ChatOpener = () => {
  const location = useLocation();

  const [emailParam, setEmailParam] = useState('');

  const addTidio = (callback) => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/lkfcy9cncjtgsxbtvxziemgfsyeyjwqd.js';
    script.async = true;

    // Add an event listener to execute the callback once the script loads.
    script.onload = callback;

    document.body.appendChild(script);
  };

  const submitEmail = (values) => {
    // Check if tidioChatApi is already defined. If it is, use it directly.
    if (window.tidioChatApi) {
      tidioChatApi.setVisitorData({ email: values.email });
      tidioChatApi.open();
    } else {
      // If not, load the script and use the API once it's loaded.
      addTidio(() => {
        if (window.tidioChatApi) {
          tidioChatApi.setVisitorData({ email: values.email });
          tidioChatApi.open();
        }
      });
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailFromQuery = params.get('email');
    if (emailFromQuery) {
      setEmailParam(emailFromQuery);
    }
  }, [location.search]);

  return (
    <Box>
      <Divider />
      <Container>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              Turn your ideas into{' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
              >
                success.
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Let's talk and start something incredible.
            </Typography>

            <EmailInput
              initialValue={emailParam}
              onSubmitCallback={submitEmail}
            />
            <Box
              display="flex"
              marginTop={2}
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth={true}
                onClick={submitEmail}
              >
                Start Chat
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ChatOpener;
