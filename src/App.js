import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchPokemon from "./components/SearchPokemon";
import ResultPokemon from "./components/ResultPokemon";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12 mt-4 border-top pt-3">
            <SearchPokemon />
          </div>
          <div className="col-12">
            <ResultPokemon />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
