import useRandomCocktail from "./useRandomCocktail"
import CocktailCard from "../CocktailCard/CocktailCard"
import Button from "../Button"
import Skeleton from "../Skeleton"

function RandomCocktail() {
  const { data: cocktail, isLoading, isError, refetch, isFetching } = useRandomCocktail()
  const isLoadingOrFetching = isLoading || isFetching

  function renderRecommendation() {
    if (isLoadingOrFetching) {
      return <Skeleton />
    }

    if (cocktail) {
      return <CocktailCard cocktail={cocktail} />
    }

    if (isError) {
      return <div>Oops an error happened :/</div>
    }

    return null
  }

  return (
    <div className="flex flex-col gap-12 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl my-4 font-black">My recommendation to you</h2>
        <Button label="Recommend me another please." onClick={() => refetch()} />
      </div>
      {renderRecommendation()}
    </div>
  )
}

export default RandomCocktail
