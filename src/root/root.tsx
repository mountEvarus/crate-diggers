import * as React from "react"

import { CssBaseline, ThemeProvider } from "@mui/material"

import { defaultTheme } from "@src/theme"

import { Main } from "./main"

export function Root(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  )
}
