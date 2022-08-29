import * as React from "react"

import { RecordTable } from "@src/common/record-table"
import { cloneDeep, findIndex, set } from "lodash"

import { useMusicResultContext } from "@src/providers"
import { MusicCollectionRepository } from "@src/repository"
import { MusicResult } from "@src/types"

import { LandingInfo } from "./landing-info"

export function SearchResults(): JSX.Element {
  
  const { musicResult, setMusicResult } = useMusicResultContext()

  const noResultsElement = <LandingInfo />

  function handleCardClick(music: MusicResult): void {

    if (music.isCollected) {
      MusicCollectionRepository.remove(music)
    } else {
      MusicCollectionRepository.add(music)
    }

    const newValue = music.isCollected.not()
    const newResult = cloneDeep(musicResult)
    const index = findIndex(newResult, (res) => res.matches(music))

    set(newResult, `[${index}].isCollected`, newValue)
    setMusicResult(newResult)
  }

  return (
    <RecordTable
      handleCardClick={handleCardClick}
      musicResult={musicResult}
      noResultsElement={noResultsElement}
    />
  )

}
