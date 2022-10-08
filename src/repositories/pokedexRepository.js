import { connection } from "../database/database.js";

export async function getMyPokedex(userId) {
  return await connection.query(
    `
    SELECT pokemons.id, "usersPokemons"."isForSale", users.id as "userId", users."userName", pokemons.number, pokemons.name, COALESCE(COUNT("pokemonId"), 0) as quantity
    FROM pokemons
    JOIN "usersPokemons"
    ON pokemons.id = "usersPokemons"."pokemonId"
    JOIN users
    ON "usersPokemons"."userId" = users.id
    WHERE "userId" = $1
    GROUP BY users."userName", pokemons.id, users.id, "usersPokemons"."isForSale", pokemons.number, pokemons.name
    ORDER BY number
    `,
    [userId]
  );
}

export async function getAllPokemons() {
  return await connection.query(
    `
    SELECT * FROM pokemons
    `
  )
}
