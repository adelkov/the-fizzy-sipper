import { useQuery } from "react-query"
import Drink from "../../types/Drink"
import DrinkApi from "../../types/DrinkApi"
import parseDrinkApiToDrink from "../../utils/methods/parseDrinkApiToDrink"

type Response = {
  drinks: DrinkApi[]
}

function useSearchCocktails(queryString: string) {
  return useQuery<Response, string, Drink[]>('search.php?s=' + queryString, {
    enabled: !!queryString,
    select: (response) => response.drinks?.map(parseDrinkApiToDrink)
  })
}

export default useSearchCocktails