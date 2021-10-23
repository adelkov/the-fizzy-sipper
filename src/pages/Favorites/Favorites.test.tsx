import Favorites from "./Favorites"
import { render } from '../../utils/tests/render'
import { FavoritesContext } from "../../providers/useFavorites"
import Drink from "../../types/Drink"

describe("Favorites page", () => {
  it('renders without crashing', () => {
    const favorites: Drink[] = []

    render(<FavoritesContext.Provider value={{ favorites }}><Favorites /></FavoritesContext.Provider>, true)
  })

  it('displays favorite cocktails', () => {
    const favorites: Drink[] = [{ name: 'dirty fanta', id: 'id-3', isFavorite: true, ingredients: [], instructions: '', imgSrc: '' }]
    const { getByText } = render(<FavoritesContext.Provider value={{ favorites }}><Favorites /></FavoritesContext.Provider>, true)

    const favoriteDrink = getByText('dirty fanta')

    expect(favoriteDrink).toBeInTheDocument()
  })
})
