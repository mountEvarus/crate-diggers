import * as React from "react"

import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type FooterStyles = {
  logoStyles: React.CSSProperties
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): FooterStyles {
  return {
    logoStyles: {
      height: "28px",
      width: "28px",
    },
    outerBoxStyles: {
      alignItems: "center",
      bottom: 0,
      backgroundColor: "lightcoral",
      borderRadius: "16px 16px 0 0",
      display: "flex",
      justifyContent: "space-between",
      p: "12px 16px",
      position: "absolute",
      width: "100%",
    },
  }
}
