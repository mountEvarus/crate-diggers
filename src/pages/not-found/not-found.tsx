import * as React from "react"

import { Box, Typography } from "@mui/material"

import { useStyles } from "./not-found.styles"

export function NotFound(): JSX.Element {

  const styles = useStyles()

  return (
    <Box sx={styles}>
      <Typography variant="h1">404!</Typography>
      <Typography>Page not found...</Typography>
    </Box>
  )
}
