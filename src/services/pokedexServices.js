import * as pokedexRepository from "../repositories/pokedexRepository.js";

export async function getMyPokedex(userId) {
  const { rows: pokemons } = await pokedexRepository.getAllPokemons();
  const { rows: myPokemons } = await pokedexRepository.getMyPokedex(userId);
  const pokedex = []


  for(let j = 0; j < pokemons.length; j++){
    for(let i = 0; i < myPokemons.length; i++) {
      if (pokemons[j].number === myPokemons[i].number) {
        pokedex.push({...pokemons[j], hasIt: true})
        break
      }
      pokedex.push({...pokemons[j], hasIt: false})
    }
  }

  return pokedex.sort();
}


