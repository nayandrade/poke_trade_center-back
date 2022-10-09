import * as marketServices from "../services/marketServices.js";

export async function getMarket(req, res) {
  const { id } = res.locals.userData;
  const market = await marketServices.getMarket(id);

  res.status(200).send(market);
}

export async function postIntoMarket(req, res) {
  const { id: userId } = res.locals.userData;
  const { pokenumber, pokeintent } = req.params;
  const cardId = await marketServices.getCardId(userId, pokenumber);
  console.log(userId, cardId, pokeintent);
  const market = await marketServices.postIntoMarket(
    userId,
    cardId,
    pokeintent
  );

  res.status(201).send(market);
}

export async function getAllPokemons(req, res) {
  const allpokemons = await marketServices.getAllPokemons();
  res.status(200).send(allpokemons);
}

export async function tradeFromMarket(req, res) {
  const { id: userId } = res.locals.userData;
  const { pokeid, pokeintent } = req.params;
  const userCardId = await marketServices.getCardId(userId, pokeintent);

  const previousOwnerId = await marketServices.getOwnerId(pokeid);

  const trade = await marketServices.tradeFromMarket(
    userId,
    userCardId,
    previousOwnerId,
    pokeid,
    pokeintent
  );
  res.status(200).send(trade);
}
