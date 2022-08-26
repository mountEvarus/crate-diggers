import * as React from "react"

import { Box } from "@mui/material"
import { RecordCard } from "@src/common/record-card"
import { TableHeading } from "@src/common/table-heading"

import { MusicCollectionRepository } from "@src/repository"
import { MusicResult } from "@src/types"

import { useStyles } from "./collection.styles"

export function Collection(): JSX.Element {
  const styles = useStyles()

  const initialState = MusicCollectionRepository.getAll()
  const [musicResult, setMusicResult] = React.useState(initialState)

  function handleCardClick(music: MusicResult): void {

    if (music.isCollected) {
      MusicCollectionRepository.remove(music)
    } else {
      MusicCollectionRepository.add(music)
    }

    const newResult = MusicCollectionRepository.getAll()
    setMusicResult(newResult)
  }

  return (
    <Box sx={styles}>
      <TableHeading />
      {musicResult.map((result, index) => {
        return <RecordCard key={index} handleCardClick={handleCardClick} result={result} />
      })}
    </Box>
  )
}
