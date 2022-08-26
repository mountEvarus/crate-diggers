import * as React from "react"

import { Box } from "@mui/material"
import { RecordCard } from "@src/common/record-card"
import { TableHeading } from "@src/common/table-heading"
import { cloneDeep, findIndex, set } from "lodash"

import { useMusicResultContext } from "@src/providers"
import { MusicCollectionRepository } from "@src/repository"
import { MusicResult } from "@src/types"

import { LandingInfo } from "./landing-info"
import { useStyles } from "./record-table.styles"

export function RecordTable(): JSX.Element {
  const styles = useStyles()
  const { musicResult, setMusicResult } = useMusicResultContext()

  function handleCardClick(music: MusicResult): void {

    if (music.isCollected) {
      MusicCollectionRepository.remove(music)
    } else {
      MusicCollectionRepository.add(music)
    }

    const newValue = !music.isCollected
    const newResult = cloneDeep(musicResult)
    const index = findIndex(newResult, (res) => JSON.stringify(res) === JSON.stringify(music))

    set(newResult, `[${index}].isCollected`, newValue)
    setMusicResult(newResult)

  }
  
  return (
    <Box sx={styles}>
      {musicResult.length ? <TableHeading /> : <LandingInfo />}
      {musicResult.map((result, index) => {
        return <RecordCard key={index} handleCardClick={handleCardClick} result={result} />
      })}
    </Box>
  )
}
