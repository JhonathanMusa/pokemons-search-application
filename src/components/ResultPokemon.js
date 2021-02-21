import React from "react";
import { useSelector } from "react-redux";

const ResultPokemon = () => {
  const search = useSelector((state) => state.search);

  return (
    <div className="text-center">
      <h3 className="text-dark">Resultado: </h3>
      {search.loading && <div className="text-warning">Buscando...</div>}
      {search.pokemon.length >= 1 && (
        <div className="text-success">
          <img src={search.pokemon[0].sprites.front_default} alt="Pokemon" />
          <span>{search.pokemon[0].name}</span>
        </div>
      )}
      {search.error !== "" && (
        <span className="text-danger">{search.error}</span>
      )}
    </div>
  );
};

export default ResultPokemon;
