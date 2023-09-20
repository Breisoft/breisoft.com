import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import BaseHero from 'components/BaseHero';
import { Card } from '@mui/material';

// Headline Block for the About Us Page
const AboutUsHeadlineBlock = () => (
  <Box marginBottom={4} data-aos="fade-up">
    <Typography
      variant="h3"
      gutterBottom
      sx={{
        fontWeight: 900,
        color: 'common.white',
      }}
    >
      Connect Instantly with Breisoft's Web Engineers
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
      Have questions on Django, React, or web scraping? Dive into a live chat
      with our experts. We're here to guide, assist, and transform your web
      aspirations into groundbreaking reality.
    </Typography>
  </Box>
);

// Team Introduction Block for the About Us Page
const AboutUsTeamBlock = () => (
  <Box
    height={1}
    width={1}
    maxHeight={600}
    padding={0.5}
    component={Card}
    dropShadow={1}
  >
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
);

const Hero = () => {
  return (
    <BaseHero>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <AboutUsHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <AboutUsTeamBlock />
          </Box>
        </Grid>
      </Grid>
    </BaseHero>
  );
};

export default Hero;
