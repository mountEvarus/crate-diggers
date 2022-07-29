import { getApiUriBuilder } from "./api-uri"
import { MessagePayload } from "./payload"
import { FilteredResult , parseSearchResult } from "./response"

export type SearchType = "artist" | "release_title"

export async function discogsSearch(search: string, type: SearchType = "artist"): Promise<MessagePayload | FilteredResult[]> {
  console.log(type)
  
  const uri = getApiUriBuilder()
    .addQueryParameter(type, search)
    .build()

  console.log(uri)

  try {
    const res = fetch(uri)
      .then(res => res.json() as Promise<Record<string, unknown>>)
      .then(res => parseSearchResult(res))

    return await res
  } catch (err) {
    const error = err as Error
    console.log(error)

    return { message: error.message }
  }
}
