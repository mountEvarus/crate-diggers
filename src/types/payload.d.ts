export type MessagePayload = {
  message: string
}

export type SearchResultPayload = {
  pagination: Pagination
  results: SearchResult[]
}

type Pagination = {
  items: number
  page: number
  pages: number
  per_page: number
  urls: Record<string, unknown>
}

type SearchResult = {
  barcode: string[]
  catno: string
  community: {
    have: number
    want: number
  }
  country: string
  cover_image: string
  format: string[]
  genre: string[]
  id: number
  label: string[]
  master_id: number
  master_url: string
  resource_url: string
  style: string[]
  thumb: string
  title: string
  type: string
  uri: string
  year: string
}
