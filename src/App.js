import React from 'react';
import Header from './components/Header/index';
import Search from './components/Search/index';
import { makeStyles } from '@material-ui/core/styles';
import GistsList from './components/GistsList';

const useStyles = makeStyles(theme => ({
  main: {
    padding: '20px 0',
    maxWidth: 1200,
    margin: '100px auto',
    width: '100%',
    textAlign: 'center'
  }
}));

function App({ gists }) {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <main className={classes.main}>
        <Search></Search>
        <GistsList gists={gists}></GistsList>
      </main>
    </div>
  );
}

export default App;
