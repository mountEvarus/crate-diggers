import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"
import { MarginalHeight } from "@src/common/MarginalHeight"

export function useStyles(): SxProps<Theme> {

  return {
    m: "0 auto",
    maxWidth: "1920px",
    minHeight: `calc(100vh - ${MarginalHeight.header} - ${MarginalHeight.footer})`,
    pb: "56px",
    width: "100%",
  }
}
