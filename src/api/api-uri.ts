import { Config } from "@src/config"

import { UriBuilder } from "./uri-builder"

export function getApiUriBuilder(): UriBuilder {
  return UriBuilder
    .create(`${Config.api}/${Config.endpoint.search}`)
    .addQueryParameter("type", "master")
    .addQueryParameter("key", Config.key)
    .addQueryParameter("secret", Config.secret)
}
