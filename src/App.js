import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchPokemon from "./components/SearchPokemon";
import ResultPokemon from "./components/ResultPokemon";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <SearchPokemon />
      </div> 
      <div>
        <ResultPokemon />
      </div>
    </Provider>
  );
};

export default App;
