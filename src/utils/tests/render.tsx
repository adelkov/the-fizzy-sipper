import { ReactElement } from "react"
import { render as rtlRender } from "@testing-library/react"
import { QueryClientProvider } from "react-query"
import queryClient from "../queryClient"
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { FavoritesProvider } from "../../providers/useFavorites";

const render = (ui: ReactElement, disableDefaultProvider?: boolean, { ...options } = {}) =>
  rtlRender(ui, {
    wrapper: ({ children }) => (
      <Router>
        <QueryClientProvider client={queryClient}>
          {disableDefaultProvider ? (
            <>{children}</>
          ) : (
            <FavoritesProvider>
              {children}
            </FavoritesProvider>
          )}
        </QueryClientProvider>
      </Router>
    ),
    ...options,
  })

export * from "@testing-library/react"

export { render }