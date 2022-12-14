import { connection } from "../database/database.js";

export async function createUser({
  email,
  password,
  userName,
  userStatus,
  userImage,
}) {
  return await connection.query(
    `
      INSERT INTO users(email, password, "userName", "userStatus", "userImage") VALUES($1, $2, $3, $4, $5);
    `,
    [email, password, userName, userStatus, userImage]
  );
}

export async function findUserByEmail(email) {
  return await connection.query(
    `
        SELECT * FROM users 
        WHERE email = $1
      `,
    [email]
  );
}

export async function getUserData(id) {
  return await connection.query(
    `
    SELECT users.*, COUNT(DISTINCT "usersPokemons"."pokemonId") as pokedex
    FROM users
    JOIN "usersPokemons"
    ON users.id = "usersPokemons"."userId"
    WHERE users.id = $1
    GROUP BY users.id
  `,
    [id]
  );
}

export async function updateUserData(password, userName, id) {

  return await connection.query(
    `
    UPDATE users SET "password" = $1, "userName" = $2
    WHERE id = $3
    RETURNING *
  `,
    [password, userName, id]
  );
}

export async function updateTimestamp(id) {

  return await connection.query(
    `
    UPDATE users SET "dailyCardsTimeStamp" = NOW()
    WHERE id = $1
    RETURNING *
  `,
    [id]
  );
}

export async function updateUserPic(userImage, id) {

  return await connection.query(
    `
    UPDATE users SET "userImage" = $1
    WHERE id = $2
    RETURNING *
  `,
    [userImage, id]
  );
}
