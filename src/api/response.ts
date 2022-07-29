import { MessagePayload, SearchResultPayload } from "./payload"

export type FilteredResult = {
  id: number
  cover: string
  year: string
  artistAndTitle: string
  format: string[]
}

function instanceOfMessagePayload(payload: Record<string, unknown>): payload is MessagePayload {
  return "message" in payload
}

export function parseSearchResult(response: Record<string, unknown>): MessagePayload | FilteredResult[] {
  if (instanceOfMessagePayload(response)) {
    return response
  } else {
    return (response as SearchResultPayload)
      .results
      .map(result => {
        const { cover_image, format, master_id, title, year } = result

        return {
          id: master_id,
          cover: cover_image,
          year: year,
          artistAndTitle: title,
          format: format,
        }
      })

  }
}
