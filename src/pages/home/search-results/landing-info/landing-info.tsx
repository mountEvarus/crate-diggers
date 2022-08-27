import * as React from "react"

import { Box, Typography } from "@mui/material"
import MusicGif from "@src/assets/music.gif"

import { useStyles } from "./landing-info.styles"

export function LandingInfo(): JSX.Element {
  const { gifStyles, headingStyles, outerBoxStyles } = useStyles()

  return (
    <Box sx={outerBoxStyles}>
      <Typography sx={headingStyles}>
        Welcome to crate diggers!
      </Typography>
      <Box component="img" src={MusicGif} sx={gifStyles} />
      <Typography>This project uses the <a href="https://www.discogs.com/developers" target="_blank" rel="noreferrer">Discogs API</a> to query their vast music database, either by record title or artist. Have a go for yourself using the search bar above!</Typography>
      <Typography>You can favourite records from your search and see them in your collection, by navigating to the collection page via the header.</Typography>
    </Box>
  )
}
