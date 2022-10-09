import { connection } from "../database/database.js";

export async function getMarket(userId) {
  return await connection.query(
    `
        SELECT * from "usersPokemons"
        JOIN pokemons
        ON "usersPokemons"."pokemonId" = pokemons.id
        WHERE "userId" <> $1
        AND "isForSale" = true
        ORDER BY "lastUpdate"
    `,
    [userId]
  );
}

export async function getCardId(userId, pokenumber) {
  return await connection.query(
    `
        SELECT "usersPokemons".*, pokemons.number, pokemons.name, pokemons."pokemonImage"
        FROM "usersPokemons"
        JOIN pokemons
        ON "usersPokemons"."pokemonId" = pokemons.id
        WHERE "userId" = $1
        AND pokemons.number = $2
        ORDER BY "lastUpdate"
    `,
    [userId, pokenumber]
  );
}

export async function postIntoMarket(cardId, pokeintent) {
  return await connection.query(
    `
        UPDATE "usersPokemons" SET "isForSale" = true, "pokeIntent" = $2, "lastUpdate" = NOW()
        WHERE id = $1
        RETURNING *
    `,
    [cardId, pokeintent]
  );
}

export async function validateOwner(userId, cardId) {
  return await connection.query(
    `
        SELECT *
        FROM "usersPokemons"
        WHERE "userId" = $1
        AND id = $2
    
    `,
    [userId, cardId]
  );
}
