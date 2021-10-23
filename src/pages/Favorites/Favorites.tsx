import useFavorites from "../../providers/useFavorites"
import CocktailCard from "../../components/CocktailCard/CocktailCard"

function Favorites() {
  const { favorites } = useFavorites()
  const isNoFavorites = favorites.length === 0

  return (
    <div className="w-full max-w-4xl mx-auto  px-4">
      <h2 className="text-2xl my-4 font-black">Favorites page</h2>
      {isNoFavorites && <div>You do not have any favorite cocktails yet.</div>}
      <ul>
        {favorites.map(favoriteCocktail => (
          <li key={favoriteCocktail.id}>
            <CocktailCard cocktail={favoriteCocktail} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites
