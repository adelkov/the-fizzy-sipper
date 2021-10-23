import { createServer, Model } from "miragejs"
import { MaybePromise } from "miragejs/server"
import config from "../config"

type GetEndpoints = {
  pathname: string
  resolvedValue: MaybePromise<object>
}[]
function makeServer(getEndpoints: GetEndpoints) {
  return createServer({
    models: {
      drink: Model,
    },
    environment: "test",
    routes() {
      getEndpoints.forEach((endpoints) => {
        this.get(
          config.baseURL + endpoints.pathname,
          () => endpoints.resolvedValue
        )
      })
    },
  })
}

export default makeServer