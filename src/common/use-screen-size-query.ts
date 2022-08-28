import { useMediaQuery, useTheme } from "@mui/material"

type QueryType = "max-width" | "min-width"
type Size = "xs" | "sm" | "md" | "lg" | "xl"

export function useScreenSizeQuery(size: Size, type: QueryType = "max-width"): boolean {
  const theme = useTheme()

  enum Breakpoint {
    xl = theme.breakpoints.values.xl, //1536
    lg = theme.breakpoints.values.lg, //1200
    md = theme.breakpoints.values.md, //900
    sm = theme.breakpoints.values.sm, //600
    xs = theme.breakpoints.values.xs, //0
  } 

  const breakpoint = Breakpoint[size]

  return useMediaQuery(`(${type}: ${breakpoint}px)`)
}
