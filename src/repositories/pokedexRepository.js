import { connection } from "../database/database.js";

export async function getMyPokedex(userId) {
  return await connection.query(
    `
    select pokemons.id, "usersPokemons"."isForSale", users.id as "userId", users."userName", pokemons.number, pokemons.name, COALESCE(COUNT("pokemonId"), 0) as quantity
    from pokemons
    left join "usersPokemons"
    on pokemons.id = "usersPokemons"."pokemonId"
    left join users
    on "usersPokemons"."userId" = users.id
    WHERE "userId" = $1
    or "userId" IS NULL
    GROUP BY users."userName", pokemons.id, users.id, "usersPokemons"."isForSale", pokemons.number, pokemons.name
    order by number
    `,
    [userId]
  );
}
