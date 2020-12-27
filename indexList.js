/* const displyaPokemon = document.querySelector(".grid-container")

const pokemonList = async () => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`
    );
    const data = await res.json();
    const singleElements = data.results

    for (pokemon in singleElements) {
      let result = singleElements[pokemon]
      let name = result['name']
      let htmlCode = `
      <div class="grid-item number">${pokemon}</div>
      <div class="grid-item name">${name}</div>
      `
      displyaPokemon.innerHTML += htmlCode
    }

  } catch (error) {
    console.log(error);
  }
}

pokemonList() */

const btnSearch = document.getElementById("btn-search");
const display = document.querySelector(".grid-container");
let pokemons = [];

const getPokemon = async () => {
  try {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
    );
    const data = await res.json();
    const result = data.results;
    for (poke in result) {
      pokemons.push(result[poke].name);
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};

getPokemon();

function getNames(e) {
  let value = document.querySelector(".result").value;
  let result = [];

  compare(value, result);
  e.preventDefault();
}

function compare(value, result) {
  for (poke of pokemons) {
    if (poke.includes(value)) {
      result.push(poke);
    }
  }

  for (poke in result) {
    let name = result[poke];
    let htmlCode = `
          <div class="grid-item name">${name}</div>
          `;

    display.innerHTML += htmlCode;
  }
}

btnSearch.addEventListener("click", getNames);
