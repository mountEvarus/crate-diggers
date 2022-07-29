import * as React from "react"

import { search } from "@src/api"

export function App(): JSX.Element {
  async function handleClick(): Promise<void> {
    const res = await search("lion king")

    console.log(res)
  }

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return <button onClick={handleClick}>API test</button>
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
