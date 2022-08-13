import * as React from "react"

import { Box } from "@mui/system"

import { SearchBar } from "./search-bar"
import { SearchResults } from "./search-results"

export function Home(): JSX.Element {
  return (
    <Box>
      <SearchBar />
      <SearchResults />
    </Box>
  )
}
