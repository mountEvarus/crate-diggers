import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"



export function useStyles(isCurrentPath: boolean): SxProps<Theme> {

  const activeHover = {
    "&:hover": {
      color: isCurrentPath ? "inherit" : "lightblue",
      transform: isCurrentPath ? "none" : "scale(1.1)",
    },
  }
  
  return {
    color: "inherit",
    cursor: isCurrentPath ? "default" : "pointer",
    fontSize: "20px",
    fontWeight: isCurrentPath ? "bold" : "normal",
    textDecoration: "none",
    transition: ".3s ease-in-out",

    ...activeHover,
  }
}
