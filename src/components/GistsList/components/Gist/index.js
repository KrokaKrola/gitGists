import React from 'react'

export default function Gist({gist}) {
  return (
    <div>
      <div>{gist.id}</div>
      <div>{gist.name}</div>
      <div>{gist.url}</div>
      <div>{gist.created_at}</div>
    </div>
  )
}
