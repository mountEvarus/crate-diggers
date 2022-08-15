import * as React from "react"

import { Box } from "@mui/material"

import { useStyles } from "./error-message.styles"

type Props = {
  error: string | undefined
}

export function ErrorMessage(props: Props): JSX.Element {
  const { error } = props
  const styles = useStyles()
  
  return (
    <>
      {error && <Box sx={styles}>{error}</Box>}
    </>
  )
}
