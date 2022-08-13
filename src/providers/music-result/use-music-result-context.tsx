import * as React from "react"

import { MusicResultContext } from "@src/providers"

export function useMusicResultContext(): MusicResultContext {
  return React.useContext(MusicResultContext)
}
