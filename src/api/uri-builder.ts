type QueryParam = {
  key: string
  value: string
}

export class UriBuilder {
  private root: string
  private queryParams: QueryParam[] = []

  private constructor(root: string) {
    this.root = root
  }

  public static create(root: string): UriBuilder {
    return new UriBuilder(root)
  }

  public addQueryParameter(key: string, value: string): UriBuilder {

    this.queryParams.push({
      key,
      value,
    })

    return this
  }

  private buildQueryString(): string {
    const queryString = "?" + this.queryParams
      .map(qp => `${qp.key}=${qp.value}`)
      .join("&")

    return queryString
  }


  public build(): string {
    return this.root + this.buildQueryString()
  }
}
