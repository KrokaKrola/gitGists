import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header/index";
import Search from "./components/Search/index";
import { makeStyles } from "@material-ui/core/styles";
import GistsList from "./components/GistsList";
import Filters from "./components/Filters";
import ViewType from "./components/ViewType";
import Pagination from "./components/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";

const BASE_QUERY = "https://api.github.com/";
const TOKEN = "";

const useStyles = makeStyles(theme => ({
  main: {
    padding: "0 20px",
    maxWidth: 1200,
    margin: "100px auto",
    width: "100%",
    textAlign: "center"
  }
}));

function createApiQuery(searchValue) {
  return searchValue === ""
    ? `${BASE_QUERY}gists`
    : `${BASE_QUERY}users/${searchValue}/gists`;
}

function baseFetchFunction(query, page) {
  return fetch(query + `?page=${page}`, {
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
  const [listFilterType, setListFilterType] = useState("NONE");
  const [listReverseMark, setListReverseMark] = useState("false");
  const [paginationPage, setPaginationPage] = useState({ page: 1 });
  const [detailedView, setDetailedView] = useState(true);

  const inputEl = useRef(null);

  useEffect(() => {
    async function fetchGists(searchValue) {
      setIsLoading(true);

      const res = await baseFetchFunction(
        createApiQuery(searchValue),
        paginationPage.page
      );
      res
        .json()
        .then(res => {
          if (res.message) {
            throw new Error(res.message);
          }
          setGists(res);
          setIsLoading(false);
        })
        .catch(err => {
          setErrors(err);
        });
    }
    fetchGists(inputEl.current.value);
  }, [paginationPage]);

  function fetchSearchGists(event) {
    event.preventDefault();
    setPaginationPage(prevState => {
      return { ...prevState, page: 1 };
    });
  }

  function viewControlsClasses() {
    const isLoadingMark = isLoading ? "isLoading" : "";
    const isActive = fetchedGists.length ? "" : "disabled";
    return `viewControls ${isLoadingMark} ${isActive}`;
  }

  function paginationClasses() {
    return fetchedGists.length ? "" : "disabled";
  }

  return (
    <div className="App">
      <Header />
      <main className={classes.main}>
        {hasErrors ? (
          "Something whent wrong. Try to reload page, or comeback later."
        ) : (
          <>
            <Search fetchSearchGists={fetchSearchGists} refElement={inputEl} />
            <div className={viewControlsClasses()}>
              <Filters
                setListFilterType={setListFilterType}
                setListReverseMark={setListReverseMark}
                listReverseMark={listReverseMark}
              />
              <ViewType setDetailedView={setDetailedView} />
            </div>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <>
                <GistsList
                  filterName={listFilterType}
                  gists={fetchedGists}
                  listReverseMark={listReverseMark}
                  detailedView={detailedView}
                />
              </>
            )}
            {fetchedGists.length < 30 ? null : (
              <Pagination
                classes={paginationClasses()}
                isLoading={isLoading}
                page={paginationPage.page}
                setPaginationPage={setPaginationPage}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
