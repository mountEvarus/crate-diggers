import * as React from "react"

import { Box, CssBaseline, ThemeProvider } from "@mui/material"

import { defaultTheme } from "@src/theme"

import { Footer } from "./footer"
import { Header } from "./header"
import { Main } from "./main"
import { useStyles } from "./root.styles"

export function Root(): JSX.Element {
  const styles = useStyles()

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={styles}>
        <Header />
        <Main />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
