import useRandomCocktail from "./useRandomCocktail"
import CocktailCard from "../CocktailCard/CocktailCard"

function RandomCocktail() {
  const { data: cocktail, isLoading, isError } = useRandomCocktail()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Oops, something went terribly wrong :/</div>
  }

  return <div>
    <h2> My recommendation to you:</h2>
    {cocktail && <CocktailCard cocktail={cocktail} />}
  </div>
}

export default RandomCocktail
