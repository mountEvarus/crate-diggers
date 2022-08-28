import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"
import { useScreenSizeQuery } from "@src/common/use-screen-size-query"



export function useStyles(isCurrentPath: boolean): SxProps<Theme> {

  const query = useScreenSizeQuery("sm", "min-width")

  const activeHover = {
    "&:hover": {
      color: isCurrentPath ? "inherit" : "lightblue",
      transform: isCurrentPath ? "none" : "scale(1.1)",
    },
  }
  
  return {
    color: "inherit",
    cursor: isCurrentPath ? "default" : "pointer",
    fontSize: query ? "20px" : "16px",
    fontWeight: isCurrentPath ? "bold" : "normal",
    textDecoration: "none",
    transition: ".3s ease-in-out",

    ...activeHover,
  }
}
