import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"
import { useScreenSizeQuery } from "@src/common/use-screen-size-query"

type LandingInfoStyles = {
  gifStyles: SxProps<Theme>
  headingStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): LandingInfoStyles {

  const mediumQuery = useScreenSizeQuery("md", "min-width")
  const smallQuery = useScreenSizeQuery("sm", "min-width")

  return {
    gifStyles: {
      height: mediumQuery ? "25vh" 
        : smallQuery ? "10vh" 
          : "5vh",
    },
    headingStyles: {
      fontSize: smallQuery ? "36px" : "24px",
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
