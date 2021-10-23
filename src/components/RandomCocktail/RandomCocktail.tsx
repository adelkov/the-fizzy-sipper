import useRandomCocktail from "./useRandomCocktail"
import CocktailCard from "../CocktailCard/CocktailCard"

function RandomCocktail() {
  const { data: cocktail, isLoading, isError, refetch, isFetching } = useRandomCocktail()

  if (isLoading || isFetching) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Oops, something went terribly wrong :/</div>
  }

  return <div>
    <h2> My recommendation to you:</h2>
    {cocktail && <CocktailCard cocktail={cocktail} />}
    <button onClick={() => {
      console.log('refetch');

      refetch()
    }}>Recommend me another please.</button>
  </div>
}

export default RandomCocktail
