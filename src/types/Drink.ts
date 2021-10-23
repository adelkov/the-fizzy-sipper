import Ingredient from './Ingredient'

type Drink = {
  isFavorite: boolean
  name: string
  id: string
  instructions: string
  imgSrc: string
  ingredients: Ingredient[]
}

export default Drink
