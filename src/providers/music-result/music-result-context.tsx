import * as React from "react"

import { MusicResult } from "@src/types"

export type MusicResultContext = {
  musicResult: MusicResult[]
  setMusicResult: (musicResult: MusicResult[]) => void
}

export const MusicResultContext = React.createContext<MusicResultContext>({
  musicResult: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMusicResult: (musicResult: MusicResult[]) => console.log("Music result context not yet initialised"),
})
