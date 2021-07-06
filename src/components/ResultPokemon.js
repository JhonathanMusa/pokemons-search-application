import React from "react";
import { useSelector } from "react-redux";
import style from "./Result.module.css";

const ResultPokemon = () => {
  const search = useSelector((state) => state.search);

  return (
    <div className={style.resultContainer}>
      {search.loading && <div className={style.loading}>Buscando...</div>}
      {search.pokemon.length >= 1 && (
        <div className={style.result}>
          <p>{search.pokemon[0].name}</p>
          <div className={style.card_head}>
            <img src={search.pokemon[0].sprites.front_default} alt="Pokemon" />
          </div>
          <div>
            <p>
              <strong>HP:</strong> {search.pokemon[0].stats[0].base_stat}
            </p>
            <p>
              <strong>Attack:</strong> {search.pokemon[0].stats[1].base_stat}
            </p>
            <p>
              <strong>Defense:</strong> {search.pokemon[0].stats[2].base_stat}
            </p>
            <p>
              <strong>Special Attack:</strong>{" "}
              {search.pokemon[0].stats[3].base_stat}
            </p>
            <p>
              <strong>Special Defense:</strong>{" "}
              {search.pokemon[0].stats[4].base_stat}
            </p>
          </div>
        </div>
      )}
      {search.error !== "" && <span>{search.error}</span>}
    </div>
  );
};

export default ResultPokemon;
