import * as React from "react"

import { faCompactDisc } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Typography } from "@mui/material"

import { useStyles } from "./header.styles"

export function Header(): JSX.Element {
  const { iconStyles, outerBoxStyles, typographyStyles } = useStyles()

  return (
    <Box sx={outerBoxStyles}>
      <FontAwesomeIcon icon={faCompactDisc} style={iconStyles} />
      <Typography sx={typographyStyles}>Crate Diggers</Typography>
    </Box>
  )
}
