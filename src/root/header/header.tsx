import * as React from "react"

import { faCompactDisc } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Typography } from "@mui/material"
import { RouterLink } from "@src/common/router-link"
import { Spacer } from "@src/common/spacer"
import { useScreenSizeQuery } from "@src/common/use-screen-size-query"

import { Path } from "@src/root"

import { useStyles } from "./header.styles"

export function Header(): JSX.Element {
  const { headingStyles, navStyles, outerBoxStyles, typographyStyles } = useStyles()
  const query = useScreenSizeQuery("sm", "min-width")

  return (
    <Box sx={outerBoxStyles}>
      <Box sx={headingStyles}>
        <FontAwesomeIcon icon={faCompactDisc} />
        {query && <Typography sx={typographyStyles}>Crate Diggers</Typography>}
      </Box>
      <Box sx={navStyles}>
        <RouterLink to={Path.Home}>Search</RouterLink>
        <RouterLink to={Path.Collection}>Collection</RouterLink>
      </Box>
      <Spacer />
    </Box>
  )
}
