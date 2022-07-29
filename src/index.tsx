import * as React from "react"

import * as ReactDom from "react-dom"

import { App } from "@src/app"


ReactDom.render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
