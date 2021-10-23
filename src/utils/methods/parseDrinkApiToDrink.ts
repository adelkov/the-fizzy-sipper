import Drink from "../../types/Drink";
import DrinkApi from "../../types/DrinkApi";
import Ingredient from "../../types/Ingredient";

const ingredientFields: Array<[keyof DrinkApi, keyof DrinkApi]> = [
  ['strIngredient1', 'strMeasure1'],
  ['strIngredient2', 'strMeasure2'],
  ['strIngredient3', 'strMeasure3'],
  ['strIngredient4', 'strMeasure4'],
  ['strIngredient5', 'strMeasure5'],
  ['strIngredient6', 'strMeasure6'],
  ['strIngredient7', 'strMeasure7'],
  ['strIngredient8', 'strMeasure8'],
  ['strIngredient9', 'strMeasure9'],
  ['strIngredient10', 'strMeasure10'],
  ['strIngredient11', 'strMeasure11'],
]

function parseDrinkApiToDrink(drinkApi: DrinkApi): Drink {
  const ingredients: Ingredient[] = []

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
