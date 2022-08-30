import * as React from "react"

import { Box } from "@mui/material"
import { RecordTable } from "@src/common/record-table"
import { cloneDeep, findIndex, set } from "lodash"

import { useMusicResultContext } from "@src/providers"
import { MusicCollectionRepository } from "@src/repository"
import { MusicResult } from "@src/types"

import { useStyles } from "./collection.styles"
import { NoFavourites } from "./no-favourites"

export function Collection(): JSX.Element {

  const styles = useStyles()

  const initialState = MusicCollectionRepository.getAll()
  const [musicResult, setMusicResult] = React.useState(initialState)

  const { musicResult: musicSearchResult, setMusicResult: setMusicSearchResult } = useMusicResultContext()

  const noResultsElement = <NoFavourites />

  function handleCardClick(music: MusicResult): void {

    if (music.isCollected) {
      MusicCollectionRepository.remove(music)
    } else {
      MusicCollectionRepository.add(music)
    }

    const newResult = MusicCollectionRepository.getAll()
    setMusicResult(newResult)

    const newValue = music.isCollected.not()
    const newSearchResult = cloneDeep(musicSearchResult)
    const index = findIndex(newSearchResult, (res) => res.matches(music))

    set(newSearchResult, `[${index}].isCollected`, newValue)
    setMusicSearchResult(newSearchResult)
  }

  return (
    <Box sx={styles}>
      <RecordTable 
        handleCardClick={handleCardClick}
        musicResult={musicResult}
        noResultsElement={noResultsElement}
      />
    </Box>
  )
}
