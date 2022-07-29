import * as React from "react"

import { SearchType, discogsSearch } from "@src/api"

export function App(): JSX.Element {

  async function handleClick(search: string, type?: SearchType): Promise<void> {
    const res = await discogsSearch(search, type)

    console.log(res)
  }

  return <div>
    {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
    <button onClick={() => handleClick("kanye west")}>API Artist test</button>
    {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
    <button onClick={() => handleClick("lion king", "release_title")}>API Title test</button>
  </div>
}

// accounts via mongodb
// sign in, save credentials to LS
// ability to add albums to favorites
// landing page
// search functionality
// top 100 functionality
// clean!
// testing!
// responsive
// pagination?
