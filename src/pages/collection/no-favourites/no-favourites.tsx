import * as React from "react"

import { Box, Typography } from "@mui/material"

import { useStyles } from "./no-favourites.styles"

export function NoFavourites(): JSX.Element {
  
  const { messageStyles, outerBoxStyles } = useStyles()

  return (
    <Box sx={outerBoxStyles}>
      <Box sx={messageStyles}>
        <Typography>You currently have no favourites</Typography>
        <Typography>Why don&apos;t you search for some of your favourite records and add them to your collection?</Typography>
      </Box>
    </Box>
  )
}
