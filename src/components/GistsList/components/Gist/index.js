import React from 'react'
import moment from 'moment';

export default function Gist({gist}) {
  const creatingDate = moment(gist.created_at).format('MMMM Do YYYY');
  return (
    <div className="gist">
      <p className="gist__description">{gist.description || `No name`}</p>
      <a href={gist.html_url} target="_blank" rel="noopener noreferrer">{gist.html_url}</a>
      <div>{creatingDate}</div>
    </div>
  )
}
