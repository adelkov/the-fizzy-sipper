import Drink from "../../types/Drink"
import { render } from "../../utils/tests/render"
import CocktailCard from "./CocktailCard"


const cocktail: Drink = {
  name: 'Boardgames on the beach',
  id: 'cocktail-1',
  instructions: 'just do it',
  ingredients: [{ name: 'salt', measure: 'pinch' }],
  imgSrc: 'test.image.data.png',
  isFavorite: true
}

describe('CocktailCard component', () => {
  it('renders without crashing', () => {
    render(<CocktailCard cocktail={cocktail} />)
  })

  it('renders cocktail name', () => {
    const { getByText } = render(<CocktailCard cocktail={cocktail} />)

    const name = getByText('Boardgames on the beach')

    expect(name).toBeInTheDocument()
  })

  it('renders cocktail instructions', () => {
    const { getByText } = render(<CocktailCard cocktail={cocktail} />)

    const instructions = getByText('just do it')

    expect(instructions).toBeInTheDocument()
  })

  it('renders cocktail ingredients', () => {
    const { getByText } = render(<CocktailCard cocktail={cocktail} />)

    const ingredientName = getByText(/salt/)
    const ingredientMeasure = getByText(/pinch/)

    expect(ingredientName).toBeInTheDocument()
    expect(ingredientMeasure).toBeInTheDocument()
  })

  it('renders cocktail thumbnail image', () => {
    const { getByAltText } = render(<CocktailCard cocktail={cocktail} />)

    const thumbnailImage = getByAltText(cocktail.name + ' thumbnail')

    expect(thumbnailImage).toBeInTheDocument()
  })

  it('renders add to favorites button when cocktail is not favorite', () => {
    const { getByText } = render(<CocktailCard cocktail={{ ...cocktail, isFavorite: false }} />)

    const addToFavoritesButton = getByText(/add to favorites/i)

    expect(addToFavoritesButton).toBeInTheDocument()
  })

  it('renders remove from favorites button when cocktail is not favorite', () => {
    const { getByText } = render(<CocktailCard cocktail={{ ...cocktail, isFavorite: true }} />)

    const removeFromFavoritesButton = getByText(/remove from favorites/i)

    expect(removeFromFavoritesButton).toBeInTheDocument()
  })
})