import * as React from "react"

import { BrowserRouter } from "react-router-dom"

import { Root } from "@src/root"

export function App(): JSX.Element {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </React.StrictMode>
  )
}
