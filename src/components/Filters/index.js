import React from "react";
import Button from "@material-ui/core/Button";

function stateUpdater(stateName, setListReverseMark, listReverseMark) {
  return prevState => {
    prevState === stateName
      ? setListReverseMark(!listReverseMark)
      : setListReverseMark(false);
    return stateName;
  };
}

export default function Filters({
  setListFilterType,
  setListReverseMark,
  listReverseMark
}) {
  return (
    <div className="filtersWrapper">
      <span>Sort by: </span>
      <Button
        variant="outlined"
        onClick={() => {
          setListFilterType(
            stateUpdater("NAME", setListReverseMark, listReverseMark)
          );
        }}
      >
        By name
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setListFilterType(
            stateUpdater("DATE", setListReverseMark, listReverseMark)
          );
        }}
      >
        By date
      </Button>
    </div>
  );
}
