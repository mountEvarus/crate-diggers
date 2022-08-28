import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"
import { MarginalHeight } from "@src/common/MarginalHeight"

type NoFavouritesStyles = {
  messageStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): NoFavouritesStyles {
  
  return {
    messageStyles: {
      alignItems: "center",
      backgroundColor: "lightblue",
      borderRadius: "25px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      justifyContent: "center",
      m: "auto",
      p: "32px",
    },
    outerBoxStyles: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: `calc(100vh - ${MarginalHeight.header} - ${MarginalHeight.footer})`,
    },
  }
}
