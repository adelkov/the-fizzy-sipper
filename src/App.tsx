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
          <h1 className="bg-indigo-600">the fizzy sipper</h1>
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
