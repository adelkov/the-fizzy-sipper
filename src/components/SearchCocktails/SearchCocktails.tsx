import { useState } from "react"
import useSearchCocktails from "./useSearchCocktails"
import CocktailCard from "../CocktailCard/CocktailCard"
import Skeleton from "../Skeleton"

const SKELETONS = [1, 2, 3]

function SearchCocktails() {
  const [queryString, setQueryString] = useState('')
  const { data: cocktails, isLoading, isFetching, isIdle } = useSearchCocktails(queryString)
  const isNothingFound = !isIdle && !isFetching && !cocktails

  function renderCocktails() {
    if (isNothingFound) {
      return <span>Nothing found :/</span>
    }

    if (isLoading) {
      return (
        <ul>
          {SKELETONS.map(skeleton => (
            <Skeleton key={skeleton} />
          ))}
        </ul>
      )
    }

    if (cocktails) {
      return (
        <ul>
          {cocktails?.map(cocktail => (
            <li key={cocktail.id}>
              <CocktailCard cocktail={cocktail} />
            </li>
          ))}
        </ul>
      )
    }

  }

  return (
    <div className="flex flex-col gap-12 my-12">
      <h2 className="text-2xl my-4 font-black">Search for cocktails</h2>
      <input
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md border-4 border-indigo-500 py-2 px-4"
        placeholder="Search for a cocktail"
        type="text"
        value={queryString}
        onChange={(e) => setQueryString(e.target.value)}
      />
      {renderCocktails()}
    </div>
  )
}

export default SearchCocktails
