import { QueryClientProvider } from "react-query"
import queryClient from "./utils/queryClient";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Redirect to="/cocktails" />
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
