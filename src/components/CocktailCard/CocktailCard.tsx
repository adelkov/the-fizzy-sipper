import useFavorites from "../../providers/useFavorites";
import Drink from "../../types/Drink";

type CocktailCardProps = {
  cocktail: Drink
}

function CocktailCard({ cocktail }: CocktailCardProps) {

  const { toggleFavorite } = useFavorites()

  return <div>
    <h3>{cocktail.name}</h3>
    <p>{cocktail.instructions}</p>
    <ul>
      {cocktail.ingredients.map(ingredient => <li key={ingredient.name}>{ingredient.name} ({ingredient.measure})</li>)}
    </ul>
    <img height={160} src={cocktail.imgSrc} alt={cocktail.name + ' thumbnail'} />
    <button onClick={() => toggleFavorite?.(cocktail)}>{cocktail.isFavorite ? 'remove from favorites' : 'add to favorites'}</button>
  </div>
}

export default CocktailCard
