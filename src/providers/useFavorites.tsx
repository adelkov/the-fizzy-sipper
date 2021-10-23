import { createContext, ReactNode, useContext, useState } from "react"
import Drink from "../types/Drink"

export const FavoritesContext = createContext<FavoritesContextProps>({ favorites: [] })

type FavoritesContextProps = {
  favorites: Drink[]
  toggleFavorite?: (drink: Drink) => void
}

export function FavoritesProvider({ children }: { children: ReactNode }) {

  const [favorites, setFavorites] = useState<Drink[]>([])

  function toggleFavorite(drink: Drink) {
    let nextFavorites = favorites.filter(
      (currentDrink) => currentDrink.id !== drink.id
    )

    if (nextFavorites.length === favorites.length) {
      nextFavorites = [{ ...drink, isFavorite: true }, ...favorites]
    }

    setFavorites(nextFavorites)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

const useFavorites = () => useContext(FavoritesContext)
export default useFavorites