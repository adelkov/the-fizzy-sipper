import Drink from "../../types/Drink";

function addFavoriteFlagToDrink(drink: Drink, favorites: Drink[]) {
  const isFavorite = !!favorites.find(favoriteDrink => favoriteDrink.id === drink.id)

  return {
    ...drink,
    isFavorite,
  }
}

export default addFavoriteFlagToDrink
