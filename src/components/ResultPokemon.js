import React from "react";
import { useSelector } from "react-redux";
import style from "./Result.module.css"

const ResultPokemon = () => {
  const search = useSelector((state) => state.search);

  return (
    <div className={style.resultContainer}>
      <h3>Resultado: </h3>
      {search.loading && <div className={style.loading}>Buscando...</div>}
      {search.pokemon.length >= 1 && (
        <div className={style.resultBody}>
          <img src={search.pokemon[0].sprites.front_default} alt="Pokemon" />
          <span>{search.pokemon[0].name}</span>
        </div>
      )}
      {search.error !== "" && <span>{search.error}</span>}
    </div>
  );
};

export default ResultPokemon;
