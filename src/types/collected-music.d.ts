import { MusicResult } from "@src/types"

export type CollectedMusic = Omit<MusicResult, "isCollected">
