import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Grid } from '@mui/material';
import FileExplorer from './components/FileExplorer';

const RepoExplorer = ({ repo }) => {
  const [fileTree, setFileTree] = useState([]);
  const [selectedFileContent, setSelectedFileContent] = useState('');

  const structureFiles = (files) => {
    const root = {};

    files.forEach((file) => {
      const pathParts = file.path.split('/');
      let currentLevel = root;

      pathParts.forEach((part, index) => {
        if (!currentLevel[part]) {
          currentLevel[part] = index === pathParts.length - 1 ? file : {};
        }
        currentLevel = currentLevel[part];
      });
    });

    return root;
  };

  useEffect(() => {
    // Fetch the repo's file tree
    fetch(
      `https://api.github.com/repos/${repo.full_name}/git/trees/main?recursive=1`,
    )
      .then((response) => response.json())
      .then((data) => {
        // Filter only the files (ignore directories)
        setFileTree(
          structureFiles(data.tree.filter((item) => item.type === 'blob')),
        );
      });
  }, [repo]);

  const fetchFileContent = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSelectedFileContent(atob(data.content));
      });
  };

  const handleFileClick = (file) => {
    fetchFileContent(file.url);
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <FileExplorer fileTree={fileTree} onClickFile={handleFileClick} />
      </Grid>
      <Grid item xs={12}>
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {selectedFileContent}
        </SyntaxHighlighter>
      </Grid>
    </Grid>
  );
};

export default RepoExplorer;
