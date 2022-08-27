import * as React from "react"

import { Box } from "@mui/material"
import { Spacer } from "@src/common/spacer"

import { useStyles } from "./home.styles"
import { SearchBar } from "./search-bar"
import { SearchResults } from "./search-results"
export function Home(): JSX.Element {
  const styles = useStyles()

  return (
    <Box sx={styles}>
      <SearchBar />
      <SearchResults />
      <Spacer />
    </Box>
  )
}
