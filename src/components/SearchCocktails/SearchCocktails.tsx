import { useState } from "react"
import useSearchCocktails from "./useSearchCocktails"
import CocktailCard from "../CocktailCard/CocktailCard"

function SearchCocktails() {
  const [queryString, setQueryString] = useState('')
  const { data: cocktails, isLoading, isFetching, isIdle } = useSearchCocktails(queryString)
  const isNothingFound = !isIdle && !isFetching && !cocktails

  return (
    <div>
      <h2> SearchCocktails</h2>
      <input placeholder="Search for a cocktail" type="text" value={queryString} onChange={(e) => setQueryString(e.target.value)} />
      {isLoading && <span>loading..</span>}
      {isNothingFound && <span>Nothing found :/</span>}
      <ul>
        {cocktails?.map(cocktail => (
          <li key={cocktail.id}>
            <CocktailCard cocktail={cocktail} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchCocktails
