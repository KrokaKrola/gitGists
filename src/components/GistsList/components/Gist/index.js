import React from "react";
import moment from "moment";

export default function Gist({ gist }) {
  const creatingDate = moment(gist.created_at).format("MMMM Do YYYY");
  return (
    <div className="gist">
      <img src={gist.owner.avatar_url} alt="" />
      <span className="gist__login">{gist.owner.login}</span>
      <p className="gist__description">
        {gist.description || `No gist name :(`}
      </p>
      <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
        {gist.html_url}
      </a>
      <div>{creatingDate}</div>
    </div>
  );
}
