import * as React from "react"

import { Box, Typography } from "@mui/material"

export function NoFavourites(): JSX.Element {
  return (
    <Box sx={{
      alignItems: "center",
      backgroundColor: "lightblue",
      borderRadius: "25px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      justifyContent: "center",
      m: "auto",
      p: "32px",
    }}>
      <Typography>You currently have no favourites</Typography>
      <Typography>Why don&apos;t you search for some of your favourite records and add them to your collection?</Typography>
    </Box>
  )
}
