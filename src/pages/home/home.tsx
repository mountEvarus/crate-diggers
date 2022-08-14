import * as React from "react"

import { Box } from "@mui/system"

import { RecordTable } from "./record-table"
import { SearchBar } from "./search-bar"

export function Home(): JSX.Element {

  return (
    <Box>
      <SearchBar />
      <RecordTable />
    </Box>
  )
}
