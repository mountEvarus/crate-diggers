import * as React from "react"

import { Box, Link, Typography } from "@mui/material"
import Logo from "@src/assets/logo.svg"

import { useStyles } from "./footer.styles"

export function Footer(): JSX.Element {
  const { logoStyles, outerBoxStyles } = useStyles()
  
  return (
    <Box component="footer" sx={outerBoxStyles}>
      <Link href="https://github.com/mountEvarus" target="_blank">
        <Logo style={logoStyles} />
      </Link>
      <Typography>
        © Evan Hynes, {new Date().getFullYear()}
      </Typography>
    </Box>
  )
}
