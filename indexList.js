const displyaPokemon = document.querySelector(".grid-container")

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

pokemonList()