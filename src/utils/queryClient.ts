import { QueryClient, QueryFunction, QueryKey } from "react-query"
import config from "./config"

export const URL = config.baseURL

const defaultQueryFn: QueryFunction<unknown, QueryKey> = async ({
  queryKey,
}) => {
  let path = queryKey[0]

  const data = await fetch(URL + path).then((res) => res.json())

  return data
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { queryFn: defaultQueryFn } },
})

export default queryClient
