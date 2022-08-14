import * as React from "react"

import { Box } from "@mui/system"

import { useMusicResultContext } from "@src/providers"

import { RecordCard } from "./record-card"
import { SearchBar } from "./search-bar"

export function Home(): JSX.Element {
  const { musicResult } = useMusicResultContext()

  return (
    <Box>
      <SearchBar />
      <Box sx={{ maxWidth: "1920px", m: "auto" }}>
        {musicResult.map((result, index) => {
          return <RecordCard key={index} {...result}  />
        })}
      </Box>
    </Box>
  )
}
