import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

export function useStyles(): SxProps<Theme> {
  const headerHeight = "80px"
  const footerHeight = "59px"

  return {
    m: "0 auto",
    maxWidth: "1920px",
    minHeight: `calc(100vh - ${headerHeight} - ${footerHeight})`,
    pb: "56px",
    width: "100%",
  }
}
