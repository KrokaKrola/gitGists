import React from "react";
import Button from "@material-ui/core/Button";

const Pagination = ({ page, setPaginationPage, isLoading, classes }) => {
  return (
    <div className={`${isLoading ? "isLoading" : ""} pagination ${classes}`}>
      <Button
        variant="contained"
        className="paginationButton"
        disabled={page === 1 ? true : false}
        onClick={() => {
          setPaginationPage(prevState => {
            return { ...prevState, page: page < 3 ? 1 : page - 1 };
          });
        }}
      >
        Go to page {page < 3 ? "first page" : page - 1}
      </Button>
      {page}
      <Button
        variant="contained"
        className="paginationButton"
        disabled={page === 100 ? true : false}
        onClick={() => {
          setPaginationPage(prevState => {
            return { ...prevState, page: page > 98 ? 100 : prevState.page + 1 };
          });
        }}
      >
        Go to page {page > 98 ? "last page" : page + 1}
      </Button>
    </div>
  );
};

export default Pagination;
