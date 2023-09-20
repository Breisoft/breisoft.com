import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';

import { Grid } from '@mui/material';

const FileExplorerItem = ({ name, item, onClickFile }) => {
  const [open, setOpen] = useState(true);
  const isFile = item.hasOwnProperty('path');

  if (isFile) {
    return (
      <Grid item xs={4}>
        <ListItem button onClick={() => onClickFile(item)}>
          <InsertDriveFile />
          <ListItemText primary={name} />
        </ListItem>
      </Grid>
    );
  } else {
    return (
      <Grid item xs={4}>
        <ListItem button onClick={() => setOpen(!open)}>
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText primary={name} />
        </ListItem>
        {open && (
          <Grid container>
            {Object.keys(item).map((subName) => (
              <FileExplorerItem
                key={subName}
                name={subName}
                item={item[subName]}
                onClickFile={onClickFile}
              />
            ))}
          </Grid>
        )}
      </Grid>
    );
  }
};

const FileExplorer = ({ fileTree, onClickFile }) => {
  return (
    <Grid container spacing={2}>
      {Object.keys(fileTree).map((name) => (
        <FileExplorerItem
          key={name}
          name={name}
          item={fileTree[name]}
          onClickFile={onClickFile}
        />
      ))}
    </Grid>
  );
};

export default FileExplorer;
