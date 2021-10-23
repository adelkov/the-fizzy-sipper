import { QueryClientProvider } from "react-query"
import queryClient from "./utils/queryClient";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cocktails from "./pages/Cocktails";
import Favorites from "./pages/Favorites/Favorites";
import Navigation from "./components/Navigation/Navigation";
import { FavoritesProvider } from './providers/useFavorites'


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <Router>
          the fizzy sipper
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Cocktails />
            </Route>
            <Route path="/cocktails">
              <Cocktails />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
          </Switch>
        </Router>
      </FavoritesProvider>
    </QueryClientProvider>
  )
}

export default App;
