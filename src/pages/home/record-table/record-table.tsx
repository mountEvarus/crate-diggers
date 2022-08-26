import * as React from "react"

import { Box, Pagination } from "@mui/material"
import { RecordCard } from "@src/common/record-card"
import { TableHelpers } from "@src/common/table-constants"
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
  const [musicResultPage, setMusicResultPage] = React.useState(musicResult)
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    const startingIndex = (page - 1) * TableHelpers.tableLength
    const endingIndex = startingIndex + TableHelpers.tableLength

    const filteredResult = musicResult.slice(startingIndex, endingIndex)

    setMusicResultPage(filteredResult)
    window.scrollTo(0, 0)
  }, [musicResult, page])

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

  function handlePageChange(_: React.ChangeEvent<unknown>, page: number) {
    setPage(page)
  }

  const areMusicResultsPresent = musicResult.length > 0
  
  return (
    <Box sx={styles}>
      {areMusicResultsPresent ? <TableHeading /> : <LandingInfo />}
      {musicResultPage.map((result, index) => {
        return <RecordCard key={index} handleCardClick={handleCardClick} result={result} />
      })}
      {areMusicResultsPresent && <Pagination count={TableHelpers.getPageCount(musicResult)} onChange={handlePageChange} />}
    </Box>
  )
}
