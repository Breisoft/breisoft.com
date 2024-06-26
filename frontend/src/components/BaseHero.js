/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

import Container from 'components/Container';

const HeroParticles = React.lazy(() => import('./HeroParticles'));

const BaseHero = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      position={'relative'}
      sx={{
        marginTop: -13,
        paddingTop: 13,
        backgroundColor: theme.palette.alternate.main,
        background:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  no-repeat center',
        backgroundSize: 'cover',
        zindex: 2,
      }}
    >
      <HeroParticles />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 74%)`,
          opacity: '0.8',
          zIndex: 1,
        }}
      />

      <Container position={'relative'} zIndex={2}>
        {children}
      </Container>
    </Box>
  );
};

BaseHero.propTypes = {
  ContentComponent: PropTypes.elementType.isRequired,
};

export default BaseHero;
