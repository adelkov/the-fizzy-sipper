import { useQuery } from "react-query"
import Drink from "../../types/Drink"
import DrinkApi from "../../types/DrinkApi"
import parseDrinkApiToDrink from "../../utils/methods/parseDrinkApiToDrink"

type Response = {
  drinks: DrinkApi[]
}

function useRandomCocktail() {
  return useQuery<Response, string, Drink | null>('random.php', {
    staleTime: Infinity,
    select: (response) => {
      return parseDrinkApiToDrink(response?.drinks?.[0])
    }
  })
}

export default useRandomCocktail
