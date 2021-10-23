import { ReactElement } from "react"
import { render as rtlRender } from "@testing-library/react"
import { QueryClientProvider } from "react-query"
import queryClient from "../queryClient"
import {
  BrowserRouter as Router,
} from "react-router-dom";

const render = (ui: ReactElement, { ...options } = {}) =>
  rtlRender(ui, {
    wrapper: ({ children }) => (
      <Router>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Router>
    ),
    ...options,
  })

export * from "@testing-library/react"

export { render }