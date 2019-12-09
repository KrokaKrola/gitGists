import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px 0',
    maxWidth: 1200,
    margin: 'auto',
    width: '100%',
    textAlign: 'center'
  },
  title: {
    fontSize: 24
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <div className={`${classes.root} container`}>
        <span className={classes.title}>Git Gists App</span>
      </div>
    </AppBar>
  );
}
