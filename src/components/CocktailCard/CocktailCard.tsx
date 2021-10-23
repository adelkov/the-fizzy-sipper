import Drink from "../../types/Drink";

type CocktailCardProps = {
  cocktail: Drink
}

function CocktailCard({ cocktail }: CocktailCardProps) {

  return <div>
    <h3>{cocktail.name}</h3>
    <p>{cocktail.instructions}</p>
    <ul>
      {cocktail.ingredients.map(ingredient => <li key={ingredient.name}>{ingredient.name} ({ingredient.measure})</li>)}
    </ul>
    <img height={160} src={cocktail.imgSrc} alt={cocktail.name + ' thumbnail'} />
  </div>
}

export default CocktailCard
