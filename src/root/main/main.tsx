import * as React from "react"

import { Box } from "@mui/system"
import { Route, Routes } from "react-router-dom"

import { Home } from "@src/pages"
import { Path } from "@src/root"

export function Main(): JSX.Element {
  
  return (
    <Box>
      <Routes>
        <Route path={Path.Home} element={<Home />} />
      </Routes>
    </Box>
  )
}
