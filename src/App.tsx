import { QueryClientProvider } from "react-query"
import queryClient from "./utils/queryClient";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cocktails from "./pages/Cocktails";
import Favorites from "./pages/Favorites";
import Navigation from "./components/Navigation";


function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App;
