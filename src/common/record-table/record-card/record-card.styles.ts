import * as React from "react"

import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"
import { useScreenSizeQuery } from "@src/common/use-screen-size-query"

type RecordCardStyles = {
  formatTextStyles: SxProps<Theme>
  iconStyles: SxProps<Theme>
  imageStyles: React.CSSProperties
  outerBoxStyles: SxProps<Theme>
  titleTextStyles: SxProps<Theme>
  yearTextStyles: SxProps<Theme>
}

export function useStyles(): RecordCardStyles {

  const query = useScreenSizeQuery("sm", "min-width")

  return {
    formatTextStyles: {
      fontSize: "14px",
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
      flexDirection: query ? "row" : "column",
      justifyContent: "space-between",
      p: "16px",
    },
    titleTextStyles: {
      flex: 1, 
      fontSize: "14px",
      minWidth: query ? "250px" : "auto",
    },
    yearTextStyles: {
      fontSize: "14px",
      textAlign: "center",
      width: "75px",
    },
  }
}
