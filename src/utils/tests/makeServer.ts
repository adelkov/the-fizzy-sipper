import { createServer, Registry } from "miragejs"
import { RouteHandler } from "miragejs/server"
import { AnyModels, AnyFactories } from "miragejs/-types"
import config from "../config"

type GetEndpoints = {
  pathname: string
  resolver: RouteHandler<Registry<AnyModels, AnyFactories>> | undefined
}[]

function makeServer(getEndpoints: GetEndpoints) {
  return createServer({
    environment: "test",
    routes() {
      getEndpoints.forEach((endpoints) => {
        this.get(
          config.baseURL + endpoints.pathname,
          endpoints.resolver,
        )
      })
    },
  })
}

export default makeServer