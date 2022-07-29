import { ApiUriBuilder } from "./api-uri"
import { MessagePayload } from "./payload"
import { FilteredResult , parseSearchResult } from "./response"

export async function search(title: string): Promise<MessagePayload | FilteredResult[]> {
  const uri = ApiUriBuilder
    .addQueryParameter("title", title)
    .build()

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
