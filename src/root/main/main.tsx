import * as React from "react"

import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"

import { Home } from "@src/pages"
import { Path } from "@src/root"

import { useStyles } from "./main.styles"

export function Main(): JSX.Element {
  const styles = useStyles()

  return (
    <Box sx={styles}>
      <Routes>
        <Route path={Path.Home} element={<Home />} />
      </Routes>
    </Box>
  )
}
