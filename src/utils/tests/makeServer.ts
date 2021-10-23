import { createServer } from "miragejs"
import { MaybePromise } from "miragejs/server"
import config from "../config"

type GetEndpoints = {
  pathname: string
  resolvedValue: MaybePromise<object>
}[]
function makeServer(getEndpoints: GetEndpoints) {
  return createServer({
    environment: "test",
    routes() {
      getEndpoints.forEach((endpoints) => {
        this.get(
          config.baseURL + endpoints.pathname,
          (a, r) => {
            return endpoints.resolvedValue
          },
        )
      })
    },
  })
}

export default makeServer