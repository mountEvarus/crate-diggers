import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

export function useStyles(): SxProps<Theme> {
  return {
    height: "100%",
    m: "0 auto",
    maxWidth: "1920px",
    pb: "56px",
    width: "100%",
  }
}
