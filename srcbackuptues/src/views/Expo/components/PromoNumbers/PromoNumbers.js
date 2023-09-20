import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const mock = [
  {
    title: '5-star reviews',
    number: '100%',
  },
  {
    title: 'technologies',
    number: '10+',
  },
  {
    title: 'hours daily',
    number: '10+',
  },
  {
    title: 'lines of code written',
    number: '10,000+',
  },
];

const PromoNumbers = () => {
  return (
    <Box width={1} display={'flex'} justifyContent={'center'}>
      <Box paddingBottom={{ xs: 1, md: 0 }} display={'flex'} overflow={'auto'}>
        {mock.map((item, i) => (
          <Box
            key={i}
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            flex={'0 0 auto'}
            marginX={2}
          >
            <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
              {item.number}
            </Typography>
            <Typography>{item.title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PromoNumbers;
