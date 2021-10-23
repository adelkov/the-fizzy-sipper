import useFavorites from "../../providers/useFavorites";
import Drink from "../../types/Drink";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

type CocktailCardProps = {
  cocktail: Drink
}

function CocktailCard({ cocktail }: CocktailCardProps) {
  const { toggleFavorite } = useFavorites()

  return (
    <div className='flex gap-4 py-4 border-b-4 border-indigo-500 flex-col md:flex-row items-center md:items-start'>
      <img className="w-32 h-full object-cover object-top rounded-full" src={cocktail.imgSrc} alt={cocktail.name + ' thumbnail'} />
      <div>
        <h3 className="text-3xl md:text-5xl px-5 pt-2 font-title">{cocktail.name}</h3>
        <p className='px-5 py-2'>{cocktail.instructions}</p>
        <ul className="px-5 py-2">
          {cocktail.ingredients.map(ingredient =>
            <li key={ingredient.name + ingredient.measure}>{ingredient.name} ({ingredient.measure})</li>
          )}
        </ul>
      </div>
      <div className='px-5 py-2 pb-4 ml-auto text-indigo-500'>
        <FavoriteButton
          variant={cocktail.isFavorite ? 'contained' : 'outlined'}
          onClick={() => toggleFavorite?.(cocktail)}
          label={cocktail.isFavorite ? 'remove from favorites' : 'add to favorites'}
        />
      </div>
    </div>
  )
}

export default CocktailCard
