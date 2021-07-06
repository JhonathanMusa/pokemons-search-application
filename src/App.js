import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchPokemon from "./components/SearchPokemon";
import ResultPokemon from "./components/ResultPokemon";

const App = () => {
  return (
    <Provider store={store}>
      <div className="pokedex_container">
        <ResultPokemon />
        <SearchPokemon />
      </div>
    </Provider>
  );
};

export default App;
