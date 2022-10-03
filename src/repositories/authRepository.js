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
