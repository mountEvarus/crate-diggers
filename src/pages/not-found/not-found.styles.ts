import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"
import { MarginalHeight } from "@src/common/MarginalHeight"

export function useStyles(): SxProps<Theme> {
  
  return {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    minHeight: `calc(100vh - ${MarginalHeight.header} - ${MarginalHeight.footer})`,
    justifyContent: "center",
  }
}
