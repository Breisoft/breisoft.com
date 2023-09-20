import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub'; // Ensure you have @mui/icons-material installed

const GithubProfile = ({ username = 'Breisoft' }) => {
  const redirectToGitHub = () => {
    window.open(`https://github.com/${username}`, '_blank');
  };

  return (
    <Button
      startIcon={<GitHubIcon />}
      variant="contained"
      color="primary"
      onClick={redirectToGitHub}
    >
      {username} on GitHub
    </Button>
  );
};

export default GithubProfile;
