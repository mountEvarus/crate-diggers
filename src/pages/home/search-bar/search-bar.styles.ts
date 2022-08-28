import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"
import { useScreenSizeQuery } from "@src/common/use-screen-size-query"

type SearchBarStyles = {
  buttonStyles: SxProps<Theme>
  fieldBoxStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): SearchBarStyles {

  const query = useScreenSizeQuery("sm", "min-width")

  return {
    buttonStyles: {
      borderRadius: "4px",
      fontSize: "16px",
      p: "8px 16px",
      "&:hover": {
        cursor: "pointer",
      },
      mr: query ? "0" : "auto",
    },
    fieldBoxStyles: {
      alignItems: "center",
      display: "flex",
      gap: "8px",
      justifyContent: "flex-start",
      width: query ? "auto" : "100%",
    },
    outerBoxStyles: {
      alignItems: "center",
      backgroundColor: "lightgreen",
      borderRadius: "8px",
      display: "flex",
      flexDirection: query ? "row" : "column",
      gap: "16px",
      justifyContent: "flex-start",
      m: "16px 12px",
      p: "20px 16px",
      "input, select": {
        borderRadius: "4px",
        p: "8px",
      },
      "label": {
        fontSize: "14px",
      },
    },
  }
}
