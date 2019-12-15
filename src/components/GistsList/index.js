import React from "react";
import Gist from "./components/Gist/index";
import { sortBy } from "lodash";

const FILTERS = {
  NONE: list => list,
  NAME: list => sortBy(list, "description"),
  DATE: list => sortBy(list, item => new Date(item.created_at))
};

export default function GistsList({
  gists,
  filterName,
  listReverseMark,
  detailedView
}) {
  const gistsList = (gists.length && gists) || [];
  const filteredGists = FILTERS[filterName](gistsList);
  const gistsListToMap = listReverseMark
    ? filteredGists.reverse()
    : filteredGists;
  return (
    <div className={`${detailedView ? "detailedView" : ""} gistList`}>
      {gistsListToMap.length > 0
        ? gistsListToMap.map(gist => <Gist gist={gist} key={gist.id} />)
        : "Nothing was found for your request"}
    </div>
  );
}
