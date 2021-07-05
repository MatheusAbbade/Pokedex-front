import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './pages/login/login-page';
import PokemonsListPage from './pages/pokemons/pokemons-list-page';

function App() {
  return (
   <Router>
       <Switch>
          <Route path="/pokemons">
            <PokemonsListPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
