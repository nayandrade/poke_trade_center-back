import * as pokedexRepository from "../repositories/pokedexRepository.js"

export async function getMyPokedex(userId) {
  const { rows: pokemons} = await pokedexRepository.getMyPokedex(userId);

  return pokemons;
}
