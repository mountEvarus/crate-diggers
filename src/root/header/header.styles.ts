import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"
import { useScreenSizeQuery } from "@src/common/use-screen-size-query"

type HeaderStyles = {
  headingStyles: SxProps<Theme>
  navStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
  typographyStyles: SxProps<Theme>
}

export function useStyles(): HeaderStyles {

  const mediumQuery = useScreenSizeQuery("md", "min-width")
  const smallQuery = useScreenSizeQuery("sm", "min-width")

  return {
    headingStyles: {
      alignItems: "center",
      display: "flex",
      fontSize: mediumQuery ? "32px" 
        : smallQuery ? "24px" : "20px",
      gap: smallQuery ? "16px" : "8px",
    },
    navStyles: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      justifyContent: "space-evenly",
    },
    outerBoxStyles: {
      backgroundColor: "lightcoral",
      borderRadius: "0 0 16px 16px",
      display: "grid",
      gridTemplateColumns: smallQuery ? "1fr 1fr 1fr" : "1fr 1fr",
      p: smallQuery ? "16px" : "8px",
      width: "100%",
    },
    typographyStyles: {
      fontSize: mediumQuery ? "32px" 
        : smallQuery ? "24px" : "20px",
      fontWeight: "medium",
    },
  }
}
