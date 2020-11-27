// Connection with pokeApi

const getPokemons = async () => {
  try {
    const section = "pokemon";
    const res = await fetch(`https://pokeapi.co/api/v2/${section}`);
    const data = await res.json();
    const singleElements = data.results.map((poke) => poke);
    // console.log(singleElements);
    document.getElementById("root").innerHTML = singleElements[0].name
  } catch (error) {
    console.log(error);
  }
};

getPokemons();
