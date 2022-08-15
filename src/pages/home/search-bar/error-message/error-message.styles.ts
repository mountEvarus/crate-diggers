import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

export function useStyles(): SxProps<Theme> {
  return {
    color: "red",
    fontWeight: "bold",
  }
}
