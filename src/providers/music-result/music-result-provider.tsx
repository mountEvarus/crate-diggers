import * as React from "react"

import { MusicResultContext } from "@src/providers"
import { MusicResult } from "@src/types"

export function MusicResultProvider<T>(props: React.PropsWithChildren<T>): JSX.Element {
  const musicResultContext = useMusicResultContext()

  return (
    <MusicResultContext.Provider value={musicResultContext}>
      {props.children}
    </MusicResultContext.Provider>
  )
}

function useMusicResultContext(): MusicResultContext {
  const defaultMusicResult: MusicResult[] = []

  const [musicResult, setResult] = React.useState<MusicResult[]>(defaultMusicResult)

  function setMusicResult(musicResult: MusicResult[]): void {
    setResult(musicResult)
  }

  return {
    musicResult,
    setMusicResult,
  }
}
