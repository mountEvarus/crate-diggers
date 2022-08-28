import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type HeaderStyles = {
  headingStyles: SxProps<Theme>
  navStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
  typographyStyles: SxProps<Theme>
}

export function useStyles(): HeaderStyles {
  return {
    headingStyles: {
      alignItems: "center",
      display: "flex",
      fontSize: "32px",
      gap: "16px",
    },
    navStyles: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    outerBoxStyles: {
      backgroundColor: "lightcoral",
      borderRadius: "0 0 16px 16px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      p: "16px",
      width: "100%",
    },
    typographyStyles: {
      fontSize: "32px",
      fontWeight: "medium",
    },
  }
}
