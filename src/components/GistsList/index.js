import React from 'react'
import Gist from './components/Gist/index';

export default function GistsList({gists}) {
  const gistsListToMap = (gists.length && gists) || []; 
  return (
    <div className="gistList">
      {
        (gistsListToMap.length > 0) 
          ? gistsListToMap.map(gist => <Gist gist={gist} key={gist.id}></Gist>)
          : 'Nothing was found for your request'
      }
    </div>
  )
}
