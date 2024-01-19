/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';

const Description = ({
  companyName = 'Evios LLC',
  projectTitle = 'Restaurant Price Scraper',
}) => {
  const theme = useTheme();

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
        <span style={{ color: theme.palette.text.secondary }}>
          {companyName}
        </span>
        : Customized Pricing for <em>{projectTitle}</em>
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
        Welcome,
        <span style={{ color: theme.palette.text.secondary }}>
          {companyName}
        </span>
        . As you venture into your <em>{projectTitle}</em> project, we at
        Breisoft recognize the importance of transparent and tailored pricing.
        Below, you'll find a detailed pricing table, specifically curated for
        your unique needs. Let's bring your vision to fruition, hand in hand.
      </Typography>
    </Box>
  );
};

export default Description;
