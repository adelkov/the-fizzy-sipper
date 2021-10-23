import { useQuery } from "react-query"
import useFavorites from "../../providers/useFavorites"
import Drink from "../../types/Drink"
import DrinkApi from "../../types/DrinkApi"
import addFavoriteFlagToDrink from "../../utils/methods/addFavoriteFlagToDrink"
import parseDrinkApiToDrink from "../../utils/methods/parseDrinkApiToDrink"

type Response = {
  drinks: DrinkApi[]
}

function useSearchCocktails(queryString: string) {
  const { favorites } = useFavorites()

  return useQuery<Response, string, Drink[]>('search.php?s=' + queryString, {
    enabled: !!queryString,
    select: (response) => {
      return response.drinks
        ?.map(parseDrinkApiToDrink)
        .map((drink) => addFavoriteFlagToDrink(drink, favorites))
    }
  })
}

export default useSearchCocktails