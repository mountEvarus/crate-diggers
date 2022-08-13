import * as React from "react"

import { useMusicResultContext } from "@src/providers"

export function SearchResults(): JSX.Element {
  const { musicResult } = useMusicResultContext()
  
  return (
    <>
      <p>Results: {musicResult.length}</p>
      {musicResult.map(((result, index) => {
        return <div key={index}>
          <img src={result.cover} />
          <p>Artist & Title: {result.artistAndTitle}</p>
          <p>Year: {result.year}</p>
          <p>Formats: {result.format.join(", ")}</p>
          <p>Is Collected: {result.isCollected ? "Yes" : "No"}</p>
        </div>
      }))}
    </>
  ) 
}
