import * as React from "react"

import { Link } from "@mui/material"
import { Link as ReactRouterLink , useLocation } from "react-router-dom"

import { Path } from "@src/root"

import { useStyles } from "./router-link.styles"

type Props = {
  children: React.ReactNode
  to: Path
}

export function RouterLink(props: Props): JSX.Element {
  const { children, to } = props
  const { pathname } = useLocation()

  const isCurrentPath = pathname === to
  const styles = useStyles(isCurrentPath)

  return (
    <Link component={ReactRouterLink} sx={styles} to={to}>{children}</Link>
  )
}
