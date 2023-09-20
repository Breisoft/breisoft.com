import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RepoExplorer from './components/RepoExplorer/RepoExplorer';

const GitHubReposAccordion = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRepo, setExpandedRepo] = useState(null);

  const fetchGitHubRepos = async (username) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to fetch repositories');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const fetchedRepos = await fetchGitHubRepos('Breisoft');
        setRepos(fetchedRepos);
        if (fetchedRepos.length > 0) {
          setExpandedRepo(fetchedRepos[0].id); // Set the first repo as expanded by default
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, []);

  const handleAccordionChange = (repoId) => (event, isExpanded) => {
    setExpandedRepo(isExpanded ? repoId : false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {repos.map((repo, index) => (
        <Accordion
          key={repo.id}
          expanded={expandedRepo === repo.id}
          onChange={handleAccordionChange(repo.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`repo-${repo.id}-content`}
            id={`repo-${repo.id}-header`}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {repo.name}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {repo.description || 'No description provided'}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RepoExplorer repo={repo} />
            <Typography>
              {/* You can provide additional information here if needed */}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default GitHubReposAccordion;
