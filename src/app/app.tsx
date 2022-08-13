import * as React from "react"

import { BrowserRouter } from "react-router-dom"

import { MusicResultProvider } from "@src/providers"
import { Root } from "@src/root"

export function App(): JSX.Element {

  return (
    <React.StrictMode>
      <MusicResultProvider>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </MusicResultProvider>
    </React.StrictMode>
  )
}
