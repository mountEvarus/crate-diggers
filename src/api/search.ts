import { MessagePayload , MusicResult } from "@src/types"

import { getApiUriBuilder } from "./api-uri"
import { parseSearchResult } from "./parse-result"

export const enum SearchType {
  Artist = "artist",
  Title = "release_title",
}

export type SearchFields = {
  search: string
  type: SearchType
}

export async function discogsSearch(searchFields: SearchFields): Promise<MessagePayload | MusicResult[]> {
  const { search, type } = searchFields
  
  const uri = getApiUriBuilder()
    .addQueryParameter(type, search)
    .build()

  try {
    const res = fetch(uri)
      .then(res => res.json() as Promise<Record<string, unknown>>)
      .then(res => parseSearchResult(res))

    return await res
  } catch (err) {
    const error = err as Error

    return { message: error.message }
  }
}
