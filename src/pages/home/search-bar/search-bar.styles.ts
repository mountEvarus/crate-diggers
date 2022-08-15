import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type SearchBarStyles = {
  buttonStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): SearchBarStyles {
  return {
    buttonStyles: {
      borderRadius: "4px",
      fontSize: "16px",
      p: "8px 16px",
    },
    outerBoxStyles: {
      alignItems: "center",
      backgroundColor: "lightgreen",
      borderRadius: "8px",
      display: "flex",
      height: "75px",
      gap: "16px",
      justifyContent: "flex-start",
      m: "16px 12px",
      p: "16px",
      "input, select": {
        borderRadius: "4px",
        p: "8px",
      },
    },
  }
}
