import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type LandingInfoStyles = {
  gifStyles: SxProps<Theme>
  headingStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): LandingInfoStyles {
  return {
    gifStyles: {
      height: "25vh",
    },
    headingStyles: {
      fontSize: "36px",
    },
    outerBoxStyles: {
      alignItems: "center",
      backgroundColor: "lightblue",
      borderRadius: "25px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      m: "auto",
      p: "32px",
    },
  }
}
