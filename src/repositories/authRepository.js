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
  SELECT * FROM users
  WHERE id = $1
  `,
    [id]
  );
}

export async function updateUserData(password, userName, userImage, id) {

  return await connection.query(
    `
    UPDATE users SET "password" = $1, "userName" = $2, "userImage" = $3
    WHERE id = $4
    RETURNING *
  `,
    [password, userName, userImage, id]
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
