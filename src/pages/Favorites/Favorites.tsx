import useFavorites from "../../providers/useFavorites"
import CocktailCard from "../../components/CocktailCard/CocktailCard"

function Favorites() {
  const { favorites } = useFavorites()

  return <div>
    <h1> Favorites page</h1>
    <ul>
      {favorites.map(favoriteCocktail => (
        <li key={favoriteCocktail.id}>
          <CocktailCard cocktail={favoriteCocktail} />
        </li>
      ))}
    </ul>
  </div>
}

export default Favorites
