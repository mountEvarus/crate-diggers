import * as React from "react"

import { HashRouter } from "react-router-dom"

import { MusicResultProvider } from "@src/providers"
import { Root } from "@src/root"

export function App(): JSX.Element {

  return (
    <React.StrictMode>
      <MusicResultProvider>
        <HashRouter>
          <Root />
        </HashRouter>
      </MusicResultProvider>
    </React.StrictMode>
  )
}
