import * as React from "react"

import { Box, Typography } from "@mui/material"

import { useStyles } from "./table-heading.styles"

export function TableHeading(): JSX.Element {
  const { 
    favouriteHeadingStyles,
    formatsHeadingStyles,
    imageHeadingStyles,
    outerBoxStyles,
    recordHeadingStyles,
    releasedHeadingStyles,
  } = useStyles()

  return (
    <Box sx={outerBoxStyles}>
      <Typography sx={imageHeadingStyles}>Image</Typography>
      <Typography sx={recordHeadingStyles}>Record</Typography>
      <Typography sx={releasedHeadingStyles}>Released</Typography>
      <Typography sx={formatsHeadingStyles}>Formats</Typography>
      <Typography sx={favouriteHeadingStyles}>Save</Typography>
    </Box>
  )
}
