import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

export function useStyles(): SxProps<Theme> {
  return {
    m: "auto",
    maxWidth: "1920px",
  }
}
