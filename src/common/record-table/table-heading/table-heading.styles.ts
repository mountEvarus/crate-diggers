import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type TableHeadingStyles = {
  favouriteHeadingStyles: SxProps<Theme>
  formatsHeadingStyles: SxProps<Theme>
  imageHeadingStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
  recordHeadingStyles: SxProps<Theme>
  releasedHeadingStyles: SxProps<Theme>
}

export function useStyles(): TableHeadingStyles {
  return {
    favouriteHeadingStyles: {
      textAlign: "center",
      width: "75px",
    },
    formatsHeadingStyles: {
      textAlign: "center",
      width: "200px",
    }, 
    imageHeadingStyles: {
      textAlign: "center",
      width: "75px",
    },
    outerBoxStyles: {
      alignItems: "center",
      backgroundColor: "lightblue",
      border: "1px solid black",
      display: "flex",
      gap: "24px",
      justifyContent: "space-between",
      p: "16px",
    },
    recordHeadingStyles: {
      flex: 1,
      minWidth: "300px",
      textAlign: "center",
    },
    releasedHeadingStyles: {
      textAlign: "center",
      width: "75px",
    },
  }
}
