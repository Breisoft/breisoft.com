import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import BaseHero from 'components/BaseHero';
import { Card } from '@mui/material';
import { Avatar } from '@mui/material';

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
      About Us
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
      Founded in 2015, Breisoft has been dedicated to creating innovative
      digital solutions that stand the test of time. Our core values include
      integrity, creativity, and customer satisfaction.
    </Typography>
  </Box>
);

// Team Introduction Block for the About Us Page
const AboutUsTeamBlock = () => (
  <Box padding={{ xs: 3, sm: 6 }} width={1} component={Card} dropShadow={1}>
    <Typography
      variant="h3"
      gutterBottom
      align="center"
      sx={{
        fontWeight: 1000,
        color: '#377dff',
      }}
    >
      Meet The Team
    </Typography>

    <Box display="flex" flexDirection={'column'}>
      <Box display="flex" flexDirection={'row'} marginBottom={4}>
        <Avatar
          alt="Team Member 1"
          src="/static/images/avatar/team1.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <Box marginLeft={2}>
          <Typography variant="h6">Josh Breidinger</Typography>
          <Typography variant="body2">
            Found & Leader Software Engineer
          </Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection={'row'} marginBottom={4}>
        <Avatar
          alt="Team Member 2"
          src="/static/images/avatar/team2.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <Box marginLeft={2}>
          <Typography variant="h6">Jane Smith</Typography>
          <Typography variant="body2">Lead Developer</Typography>
        </Box>
      </Box>

      {/* Add more team members here */}
    </Box>
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
