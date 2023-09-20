/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const mock = [
  {
    number: '100%',
    title: '5-Star Reviews',
    subtitle: 'We have a perfect track record among our clients.',
    icon: (
      <svg
        width={18}
        height={18}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    number: '10+',
    title: 'Technologies',
    subtitle:
      'Django, React, Flask, Pandas, Scrapy, Selenium, Web3, and more...',
    icon: <ComputerIcon />,
  },
  {
    number: '10+',
    title: 'Daily Hours',
    subtitle: 'We dedicate our utmost effort and time into to your projects.',
    icon: <AccessTimeIcon />,
  },
  {
    number: '10,000+',
    title: 'Lines of Code',
    subtitle:
      'We have written thousands of lines of code for our clients and are always aiming higher.',
    icon: <CodeIcon />,
  },
];

const AltPromoNumbers = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          The Stats
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                component={Card}
                padding={4}
                width={1}
                height={1}
                variant={'outlined'}
              >
                <Box display={'flex'} flexDirection={'column'}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={'h4'}
                    color={'primary'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.number}
                  </Typography>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AltPromoNumbers;
