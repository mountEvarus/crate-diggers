import * as React from "react"

import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type RecordCardStyles = {
  formatTextStyles: SxProps<Theme>
  iconStyles: SxProps<Theme>
  imageStyles: React.CSSProperties
  outerBoxStyles: SxProps<Theme>
  titleTextStyles: SxProps<Theme>
  yearTextStyles: SxProps<Theme>
}

export function useStyles(): RecordCardStyles {
  return {
    formatTextStyles: {
      textAlign: "center",
      width: "200px",
    },
    iconStyles: {
      color: "red",
      width: "75px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    imageStyles: {
      height: "75px",
      width: "75px",
    },
    outerBoxStyles: {
      alignItems: "center",
      backgroundColor: "lightblue",
      border: "1px solid black",
      borderRadius: "8px",
      display: "flex",
      gap: "24px",
      justifyContent: "space-between",
      p: "16px",
    },
    titleTextStyles: {
      flex: 1, 
      minWidth: "300px",
    },
    yearTextStyles: {
      textAlign: "center",
      width: "75px",
    },
  }
}
