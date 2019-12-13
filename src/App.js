import React, {useEffect, useState} from 'react';
import Header from './components/Header/index';
import Search from './components/Search/index';
import {makeStyles} from '@material-ui/core/styles';
import GistsList from './components/GistsList';
import Filters from './components/Filters';
import  ViewType from './components/ViewType';

const BASE_QUERY = 'https://api.github.com/';
const TOKEN = '';


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

    const [isLoading, setIsLoading] = useState(true);
    const [listFilterType, setListFilterType] = useState('NONE');
    const [listReverseMark, setListReverseMark] = useState('false');

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
            <Header/>
            <main className={classes.main}>
                <Search
                    fetchSearchGists={fetchSearchGists}
                />
                {isLoading ? (
                    'Loading gists...'
                ) : (
                    <>
                        <div className="viewControls">
                            <Filters setListFilterType={setListFilterType} setListReverseMark={setListReverseMark}
                                     listReverseMark={listReverseMark}/>
                                     <ViewType/>
                        </div>

                        <GistsList filterName={listFilterType} gists={fetchedGists} listReverseMark={listReverseMark}/>
                    </>
                )}
            </main>
        </div>
    );
}

export default App;
