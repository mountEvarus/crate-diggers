import * as React from "react"

import { RecordTable } from "@src/common/record-table"
import { cloneDeep, findIndex, set } from "lodash"

import { useMusicResultContext } from "@src/providers"
import { MusicCollectionRepository } from "@src/repository"
import { MusicResult } from "@src/types"

export function Collection(): JSX.Element {

  const initialState = MusicCollectionRepository.getAll()
  const [musicResult, setMusicResult] = React.useState(initialState)

  const { musicResult: musicSearchResult, setMusicResult: setMusicSearchResult } = useMusicResultContext()

  const noResultsElement = <p>!!!</p>

  function handleCardClick(music: MusicResult): void {

    if (music.isCollected) {
      MusicCollectionRepository.remove(music)
    } else {
      MusicCollectionRepository.add(music)
    }

    const newResult = MusicCollectionRepository.getAll()
    setMusicResult(newResult)

    const newValue = !music.isCollected
    const newSearchResult = cloneDeep(musicSearchResult)
    const index = findIndex(newSearchResult, (res) => JSON.stringify(res) === JSON.stringify(music))

    set(newSearchResult, `[${index}].isCollected`, newValue)
    setMusicSearchResult(newSearchResult)
  }

  return (
    <RecordTable 
      handleCardClick={handleCardClick}
      musicResult={musicResult}
      noResultsElement={noResultsElement}
    />
  )
}
