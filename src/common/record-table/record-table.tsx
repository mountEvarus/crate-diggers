import * as React from "react"

import { Box, Pagination } from "@mui/material"

import { MusicResult } from "@src/types"

import { RecordCard } from "./record-card"
import { useStyles } from "./record-table.styles"
import { TableHelpers } from "./table-constants"
import { TableHeading } from "./table-heading"

type Props = {
  handleCardClick: (music: MusicResult) => void
  musicResult: MusicResult[]
  noResultsElement: React.ReactNode
}

export function RecordTable(props: Props): JSX.Element {

  const { handleCardClick, musicResult, noResultsElement } = props

  const [musicResultPage, setMusicResultPage] = React.useState(musicResult)
  const [page, setPage] = React.useState(1)

  const { outerBoxStyles, paginationStyles } = useStyles()

  function handlePageChange(_: React.ChangeEvent<unknown>, page: number) {
    setPage(page)
  }

  React.useEffect(() => {
    const startingIndex = (page - 1) * TableHelpers.tableLength
    const endingIndex = startingIndex + TableHelpers.tableLength

    const filteredResult = musicResult.slice(startingIndex, endingIndex)
    setMusicResultPage(filteredResult)

    if (filteredResult.length === 0 && page < 1) {
      setPage((currentPage) => currentPage - 1)
    }

    window.scrollTo(0, 0)
  }, [musicResult, page])

  const areMusicResultsPresent = musicResult.length > 0

  return (
    <Box sx={outerBoxStyles}>
      {areMusicResultsPresent ? <TableHeading /> : noResultsElement}
      {musicResultPage.map((result, index) => {
        return <RecordCard key={index} handleCardClick={handleCardClick} result={result} />
      })}
      {areMusicResultsPresent && <Pagination count={TableHelpers.getPageCount(musicResult)} onChange={handlePageChange} sx={paginationStyles} />}
    </Box>
  )
}
