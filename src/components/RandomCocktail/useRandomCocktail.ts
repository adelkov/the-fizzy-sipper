import { useQuery } from "react-query"
import useFavorites from "../../providers/useFavorites"
import Drink from "../../types/Drink"
import DrinkApi from "../../types/DrinkApi"
import addFavoriteFlagToDrink from "../../utils/methods/addFavoriteFlagToDrink"
import parseDrinkApiToDrink from "../../utils/methods/parseDrinkApiToDrink"

type Response = {
  drinks: DrinkApi[]
}

function useRandomCocktail() {
  const { favorites } = useFavorites()

  return useQuery<Response, string, Drink | null>('random.php', {
    staleTime: Infinity,
    select: (response) => {
      const drink = parseDrinkApiToDrink(response?.drinks?.[0])
      const drinkWithFavoriteFlag = addFavoriteFlagToDrink(drink, favorites)
      return drinkWithFavoriteFlag
    }
  })
}

export default useRandomCocktail
