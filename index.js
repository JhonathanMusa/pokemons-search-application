// Connection with pokeApi
const btnSearch = document.getElementById("btnSearch");

const getPokemons = async () => {
  let search = document.getElementById("search").value;
  try {
    const section = "pokemon";
    const res = await fetch(
      `https://pokeapi.co/api/v2/${section}/?offset=0&limit=151`
    );
    const data = await res.json();
    const singleElements = data.results.map((poke) => poke);
    // console.log(singleElements);
    const pokeName = singleElements[search].name;
    document.getElementById("root").innerHTML = pokeName;
  } catch (error) {
    console.log(error);
  }
};

btnSearch.addEventListener("click", getPokemons);
