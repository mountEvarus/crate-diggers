import * as React from "react"

import { faCompactDisc } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Link, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

import { Path } from "@src/root"

import { useStyles } from "./header.styles"

export function Header(): JSX.Element {
  const { iconStyles, outerBoxStyles, typographyStyles } = useStyles()

  return (
    <Box sx={outerBoxStyles}>
      <FontAwesomeIcon icon={faCompactDisc} style={iconStyles} />
      <Typography sx={typographyStyles}>Crate Diggers</Typography>
      <Link component={RouterLink} to={Path.Home}>Home</Link>
      <Link component={RouterLink} to={Path.Collection}>Collection</Link>
    </Box>
  )
}
