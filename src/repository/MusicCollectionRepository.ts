import { unionBy } from "lodash"

import { CollectedMusic, MusicResult } from "@src/types"

class MusicCollectionRepo {
  private LS_Key = "musicCollection"

  public add(music: CollectedMusic): void {
    const currentCollectedMusic = this.getAll()

    const updatedMusicResults = unionBy(
      currentCollectedMusic,
      [music],
      JSON.stringify,
    )

    localStorage.setItem(this.LS_Key, JSON.stringify(updatedMusicResults))
  }

  public getAll(): MusicResult[] {
    const currentLocalStorageValue = localStorage.getItem(this.LS_Key) ?? JSON.stringify([])
    return JSON.parse(currentLocalStorageValue) as MusicResult[]
  }

  public isRecordCollected(id: number): boolean {
    const matchingMusicLength = this
      .getAll()
      .filter(music => music.id === id)
      .length

    return matchingMusicLength > 0
  }

  public remove(music: CollectedMusic): void {
    const currentCollectedMusic = this.getAll()

    const updatedMusicResults = currentCollectedMusic
      .filter((musicResult => JSON.stringify(musicResult) !== JSON.stringify(music)))


    localStorage.setItem(this.LS_Key, JSON.stringify(updatedMusicResults))
  }
}

export const MusicCollectionRepository = new MusicCollectionRepo()
