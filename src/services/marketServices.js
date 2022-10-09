import * as marketRepository from "../repositories/marketRepository.js";
import * as pokedexServices from "../services/pokedexServices.js"

export async function getMarket(userId) {
  const { rows: market } = await marketRepository.getMarket(userId);

  return market;
}

export async function getCardId(userId, pokenumber) {
  const { rows: pokemons } = await marketRepository.getCardId(
    userId,
    pokenumber
  );
  const pokemonId = pokemons[0].id;
  console.log(pokemons);
  return pokemonId;
}

export async function postIntoMarket(userId, cardId, pokeintent) {
  const validateOwner = await marketRepository.validateOwner(userId, cardId);
  if (validateOwner.length < 1) {
    throw {
      type: "not_found",
      message: "Card not found",
    };
  }
  const { rows: newMarketInput } = await marketRepository.postIntoMarket(cardId, pokeintent)
  return newMarketInput
}

export async function getAllPokemons() {
    return await pokedexServices.getAllPokemons()
}
