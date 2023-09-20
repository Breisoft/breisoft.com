import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import Logo from 'components/Logo';
import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const { aboutUs, chat, portfolio } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="breisoft"
          width={{ xs: 100, md: 120 }}
        >
          <Box height={1} width={1}>
            <Logo colorInvert={mode === 'light'} />
          </Box>
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={aboutUs[0].title} items={aboutUs} />
        </Box>
        <Box>
          <NavItem title={chat[0].title} items={chat} />
        </Box>
        <Box>
          <NavItem title={portfolio[0].title} items={portfolio} />
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
