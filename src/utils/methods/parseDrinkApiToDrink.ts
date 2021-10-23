import Drink from "../../types/Drink";
import DrinkApi from "../../types/DrinkApi";
import Ingredient from "../../types/Ingredient";

function parseDrinkApiToDrink(drinkApi: DrinkApi): Drink {
  const ingredients: Ingredient[] = []
  const ingredientFields: Array<[keyof DrinkApi, keyof DrinkApi]> = [['strIngredient1', 'strMeasure1'],]

  ingredientFields.forEach(field => {
    const name = drinkApi[field[0]]
    const measure = drinkApi[field[1]] ?? "Measure missing for this cocktail :/"

    if (name) {
      ingredients.push({ name, measure })
    }
  })

  const instructions = drinkApi.strInstructions ?? 'Instructions missing for this cocktail'
  const name = drinkApi.strDrink
  const imgSrc = drinkApi.strDrinkThumb
  const id = drinkApi.idDrink

  return {
    name,
    imgSrc,
    id,
    ingredients,
    instructions,
    isFavorite: false,
  }
}

export default parseDrinkApiToDrink
