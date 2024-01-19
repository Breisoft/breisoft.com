/* eslint quotes: off */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from '@mui/material';

const mock = [
  {
    feedback:
      'Loved working with Josh - he worked with me to scope the technical requirements, suggested little details that were going to be useful ahead of time and executed perfectly.\n\nThe regular updates on progress, detailed documentation were super useful.\n\nHe also raised a couple of technical challenges and went out of his way to find work-arounds, all while delivering the expected end product ahead-of-time.\n\nWould certainly re-hire for future projects.',
    name: 'Happy Customer',
    title: 'Personal Library app using Django',
  },
  {
    feedback:
      "Very pleased with Josh's work.\n\nWe had some issues when my original plan proved to be infeasible and without asking he presented several new options for me to consider. Then he executed them to achieve the same result.\n\nHe responds quickly and has produced more features than I asked for. I would, and probably shall, hire him again. A pleasure to work with.",
    name: 'Satisfied Client',
    title: 'Build a website on bubble with a pythonanywhere backend',
  },
  {
    feedback:
      "Josh is a nice and very smart developer who delivers what he promises!\n\n The work quality is extremely high and his skills are above expectations.\n\n He provides additional support even though the contract has ended and he was willing to do additional work until you're 100% satisfied with his job.\n\n Thank you for the great work and collaboration, Josh. Will for sure work again with you.",
    name: 'Grateful Client',
    title: 'Scraping Temu and exporting product details to shopify csv file',
  },
  {
    feedback:
      'Hiring Josh was the best decision. Quality / Speed / Cost all there! I would definitely hire again!!!',
    name: 'Valued Partner',
    title: 'Flask Example - Read/Write/Update Database',
  },
  {
    feedback: 'Awesome - Super Helpful and Responsive! Fast!',
    name: 'Valued Partner',
    title: 'Flask Page - App Flow',
  },
  {
    feedback:
      'He has a good understanding of python and was able to help and to give directives to resolve my issue. Thanks',
    name: 'Grateful Collaborator',
    title: 'Python Server Timeout',
  },
];

const upworkUrl = 'https://www.upwork.com/fl/~01ec58bc6ca6446c80';

const Feedback = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          What Our Clients Say
        </Typography>
        <Typography variant="h6" align={'center'} color={'text.secondary'}>
          Our mission is complete client satisfaction, no matter what.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            sx={{
              border: 0,
              [theme.breakpoints.up('md')]: {
                borderRight: `1px solid ${theme.palette.alternate.dark}`,
                '&:nth-of-type(2n)': {
                  borderRight: `1px solid ${theme.palette.alternate.dark}`,
                },
                '&:nth-of-type(-n+4)': {
                  borderBottom: 0,
                },
                '&:nth-of-type(3n)': {
                  borderRight: 0,
                },
                '&:nth-of-type(-n+3)': {
                  borderBottom: `1px solid ${theme.palette.alternate.dark}`,
                },
              },
            }}
          >
            <Box p={2}>
              <Box marginBottom={2}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                  />
                </ListItem>
              </Box>
              <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
                {item.feedback.split('\n').map((text, index) => (
                  <React.Fragment key={index}>
                    {text}
                    {index !== item.feedback.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
              {[1, 2, 3, 4, 5].map((item) => (
                <Box key={item} color={theme.palette.secondary.main}>
                  <svg
                    width={18}
                    height={18}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box mt={4} textAlign="center">
        <Typography variant="h6" gutterBottom>
          Inspired by what our clients have to say?
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Dive deeper into our client relationships. Check out more reviews and
          engagements on
          <Link
            href={upworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            style={{ marginLeft: '4px' }}
          >
            Upwork
          </Link>
          .
        </Typography>
        <Link href={upworkUrl} target="_blank" rel="noopener noreferrer">
          <ArrowForwardIosIcon sx={{ mt: 1 }} color="primary" />
        </Link>
      </Box>
    </Box>
  );
};

export default Feedback;
