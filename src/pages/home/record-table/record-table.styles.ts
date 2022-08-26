import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type RecordTableStyles = {
  outerBoxStyles: SxProps<Theme>
  paginationStyles: SxProps<Theme>
}

export function useStyles(): RecordTableStyles {
  return {
    outerBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      maxWidth: "1920px",
      m: "12px",
    },
    paginationStyles: {
      m: "auto",
    },
  }
}
