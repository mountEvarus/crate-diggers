import { Config } from "@src/config"

import { UriBuilder } from "./uri-builder"

export const ApiUriBuilder = UriBuilder
  .create(`${Config.api}/${Config.endpoint.search}`)
  .addQueryParameter("type", "master")
  .addQueryParameter("key", Config.key)
  .addQueryParameter("secret", Config.secret)
