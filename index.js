// Connection with pokeApi

const getPokemons = async () => {
  try {
    const section = "pokemon-color";
    const res = await fetch(`https://pokeapi.co/api/v2/${section}`);
    const data = await res.json();
    const singleElements = data.results.map((poke) => poke);
    console.log(singleElements);
  } catch (error) {
    console.log(error);
  }
};

getPokemons();
