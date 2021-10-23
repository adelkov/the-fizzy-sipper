import RandomCocktail from "../../components/RandomCocktail/RandomCocktail"
import SearchCocktails from "../../components/SearchCocktails"

function Cocktails() {
  return <div className='w-full max-w-4xl mx-auto px-4'>
    <RandomCocktail />
    <SearchCocktails />
  </div>
}

export default Cocktails
