/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div>
      <Typography
        variant={'h3'}
        gutterBottom
        sx={{ fontWeight: 700, textAlign: 'center' }}
      >
        Meet the Founder
      </Typography>
      <Divider />
      <br />
      <br />
      <Box>
        <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
          <Grid item container alignItems={'center'} xs={12} md={6}>
            <Box>
              <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
                From Childhood Fascination to Professional Mastery
              </Typography>

              <Typography component={'p'} color={'text.secondary'}>
                Ever since Josh was 14, computers weren't just a hobby—they were
                a calling. This wasn't a fleeting interest but a lifelong
                commitment that propelled him into the expansive universe of
                coding, software engineering, and ultimately, entrepreneurship.
                To him, software engineering isn't just about assembling lines
                of code; it's about leveraging technology to solve real-world
                challenges and improve lives.
              </Typography>
              <br />
              <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
                A Track Record of Innovation and Success
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                Before he started doing software engineering at Breisoft, he
                co-founded Apollo Analytics LLC. He, along with his co-founder,
                pioneered solutions in Natural Language Processing (NLP) and
                machine learning to predict cryptocurrency token market trends.
                The ingenuity of Apollo Analytics caught the eye of industry
                leaders,{' '}
                <Link href="https://sonar-official.medium.com/sonar-integrates-the-ai-layer-3a8940551552">
                  culminating in nearly $1 million in negotiations with Sonar
                </Link>
                , a frontrunner in crypto token analysis. That venture taught
                him not just the technical aspects of blockchain, NLP, and
                backend development, but also leadership, negotiation, and
                perserverance.
                <br />
                <br />
                Not only that, but this monumental achievement earned his
                co-founder and himself an article in{' '}
                <Link href="https://engineering.ucsc.edu/news/alumni-spotlight-raghav-chaudhary/">
                  University of California, Santa Cruz's NLP Engineering
                  Program's Newspaper.
                </Link>
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
            <Box maxWidth={500} width={1} position="relative">
              <Box
                component={'img'}
                loading="lazy"
                src={'images/selfie.png'}
                width={1}
                height={1}
                sx={{
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
                  border: '6px solid black',
                }}
              />
              <Typography
                sx={{
                  position: 'absolute', // Makes the text position relative to the nearest parent with 'position: relative'
                  top: '7.5%', // Vertically centers the text
                  left: '50%', // Horizontally centers the text
                  transform: 'translate(-50%, -50%)', // Needed for true centering
                  fontSize: '2rem', // Increase the size
                  fontWeight: 'bold', // Make it bold
                  textTransform: 'uppercase', // Convert to uppercase
                  letterSpacing: '0.025em', // Increase the letter spacing
                  color: 'white',
                  textShadow: '2px 2px 4px #000000', // Add text shadow
                  whiteSpace: 'nowrap',
                }}
              >
                Josh Breidinger
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Story;
