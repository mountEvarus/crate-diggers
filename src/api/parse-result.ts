import { instanceOfMessagePayload } from "@src/typeguards"
import { MessagePayload, MusicResult, SearchResultPayload } from "@src/types"

export function parseSearchResult(response: Record<string, unknown>): MessagePayload | MusicResult[] {
  
  if (instanceOfMessagePayload(response)) {
    return response
  } else {
    return (response as SearchResultPayload)
      .results
      .map(result => {
        const { cover_image, format, master_id, title, year } = result

        return {
          artistAndTitle: title,
          cover: cover_image,
          format: format,
          id: master_id,
          year: year,
          isCollected: false,
        }
      })

  }
}
