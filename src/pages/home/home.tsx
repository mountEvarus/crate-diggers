import * as React from "react"

import { Box } from "@mui/material"
import { Spacer } from "@src/common/spacer"

import { useStyles } from "./home.styles"
import { RecordTable } from "./record-table"
import { SearchBar } from "./search-bar"
export function Home(): JSX.Element {
  const styles = useStyles()

  return (
    <Box sx={styles}>
      <SearchBar />
      <RecordTable />
      <Spacer />
    </Box>
  )
}
