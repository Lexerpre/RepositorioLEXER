console.log("hola soy Lexer")
const getAllPokemon= async ()=>{
    const pokemons= await fetch("https://pokeapi.co/api/v2/pokemon")
    const pokemonJs = await pokemons.json()
    pokemonJs.results.forEach(async(pokemon) => {
        const pokemonsData= await fetch(pokemon.url)   
        //console.log(pokemon.url)
        const pokemonsDatajs = await pokemonsData.json()
        console.log(pokemonsDatajs)
    });
    console.log()

}
getAllPokemon();