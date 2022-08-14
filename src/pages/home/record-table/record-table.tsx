import * as React from "react"

import { Box } from "@mui/material"

import { useMusicResultContext } from "@src/providers"

import { RecordCard } from "./record-card"
import { useStyles } from "./record-table.styles"
import { TableHeading } from "./table-heading"

export function RecordTable(): JSX.Element {
  const styles = useStyles()
  const { musicResult } = useMusicResultContext()
  
  return (
    <Box sx={styles}>
      {musicResult.length ? <TableHeading /> : null}
      {musicResult.map((result, index) => {
        return <RecordCard key={index} {...result}  />
      })}
    </Box>
  )
}
