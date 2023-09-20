/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Description = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 900,
          color: 'common.white',
        }}
      >
        Breisoft: Pioneering Web Solutions
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
        At the crossroads of innovation and functionality, Breisoft stands as a
        beacon for top-tier web development. With expertise in Django, React,
        and web scraping, we deliver solutions that power the digital world.
        Partner with us to transform your web visions into reality.
      </Typography>
    </Box>
  );
};

export default Description;
