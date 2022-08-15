import * as React from "react"

import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type HeaderStyles = {
  iconStyles: React.CSSProperties
  outerBoxStyles: SxProps<Theme>
  typographyStyles: SxProps<Theme>
}

export function useStyles(): HeaderStyles {
  return {
    iconStyles: {
      fontSize: "32px",
    },
    outerBoxStyles: {
      alignItems: "center",
      backgroundColor: "lightcoral",
      borderRadius: "0 0 16px 16px",
      display: "flex",
      gap: "16px",
      p: "16px",
      width: "100%",
    },
    typographyStyles: {
      fontSize: "32px",
      fontWeight: "medium",
    },
  }
}
