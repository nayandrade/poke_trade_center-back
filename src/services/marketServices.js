import * as marketRepository from "../repositories/marketRepository.js";
import * as pokedexServices from "../services/pokedexServices.js";

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
  const { rows: newMarketInput } = await marketRepository.postIntoMarket(
    cardId,
    pokeintent
  );
  return newMarketInput;
}

export async function getAllPokemons() {
  return await pokedexServices.getAllPokemons();
}

export async function getOwnerId(cardId) {
  const { rows: pokemons } = await marketRepository.getOwnerId(cardId);
  const ownerId = pokemons[0].userId;

  return ownerId;
}

export async function tradeFromMarket(
  userId,
  userCardId,
  previousOwnerId,
  pokeid,
  pokeintent
) {
  const validate = await marketRepository.validateCardToTrade(pokeid, pokeintent)

  if(validate.length < 1) {
    throw {
      type: "not_found",
      message: "Card is not for trade",
    };
  }
  const { rows: firstTrade } = await marketRepository.updateOwner(userId, pokeid);
  const { rows: secondTrade } = await marketRepository.updateOwner(previousOwnerId, userCardId);

  return firstTrade
}
