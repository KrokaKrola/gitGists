import React from 'react'
import Gist from './components/Gist/index';

export default function GistsList({gists}) {
  return (
    <div>
      {gists.map(gist => <Gist gist={gist} key={gist.id}></Gist>)}
    </div>
  )
}
