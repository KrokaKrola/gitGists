import React, { useEffect, useState } from 'react';
import Header from './components/Header/index';
import Search from './components/Search/index';
import { makeStyles } from '@material-ui/core/styles';
import GistsList from './components/GistsList';

const BASE_QUERY = 'https://api.github.com/';
const TOKEN = '62ea38b937f0e12701e98476472889f9b03e83a2';

const useStyles = makeStyles(theme => ({
  main: {
    padding: '0 20px',
    maxWidth: 1200,
    margin: '100px auto',
    width: '100%',
    textAlign: 'center'
  }
}));

function createApiQuery(searchValue) {
  return searchValue === ''
    ? `${BASE_QUERY}gists`
    : `${BASE_QUERY}users/${searchValue}/gists`;
}

function baseFetchFunction(query) {
  return fetch(query, {
    headers: {
      Authorization: TOKEN
    }
  });
}

function App() {
  const classes = useStyles();

  const [hasErrors, setErrors] = useState(false);
  const [fetchedGists, setGists] = useState({});
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function fetchGists(searchValue) {
    setIsLoading(true);

    const res = await baseFetchFunction(createApiQuery(searchValue));
    res
      .json()
      .then(res => {
        setGists(res);
        setIsLoading(false);
      })
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchGists('');
  }, []);

  function fetchSearchGists(event, searchFieldValue) {
    event.preventDefault();
    fetchGists(searchFieldValue);
  }

  return (
    <div className="App">
      <Header />
      <main className={classes.main}>
        <Search
          searchFieldValue={searchFieldValue}
          setSearchFieldValue={setSearchFieldValue}
          fetchSearchGists={fetchSearchGists}
        ></Search>
        {isLoading ? (
          'Loading gists...'
        ) : (
          <GistsList gists={fetchedGists}></GistsList>
        )}
      </main>
    </div>
  );
}

export default App;
