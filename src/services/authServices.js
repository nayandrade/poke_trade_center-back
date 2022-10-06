import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as authRepository from "../repositories/authRepository.js";
import bcrypt from "bcrypt";

dotenv.config();

export async function createtUser(user) {
  const { email, password } = user;
  const { rows: hasUser } = await findUserByEmail(email);
  console.log(hasUser);
  if (hasUser.length > 0) {
    throw {
      type: "conflict",
      message: "User already registered, please login to continue",
    };
  }
  const encriptedPassword = bcrypt.hashSync(password, 10);
  await authRepository.createUser({
    ...user,
    password: encriptedPassword,
  });
}

export async function connectUser(user) {
  const { email, password } = user;
  const { rows } = await findUserByEmail(email);
  const { id, userName, userStatus, userImaege} = rows[0];

  if (rows.length < 1) {
    throw {
      type: "conflict",
      message: "User not found, please create an account to continue",
    };
  }

  const validatePassword = await bcrypt.compare(password, rows[0].password);
  if (!validatePassword) {
    throw {
      type: "unauthorized",
      message: "Unauthorized, please login to continue",
    };
  }

  const token = jwt.sign({ id, userName, userStatus, userImaege }, String(process.env.JWT_KEY), {
    expiresIn: process.env.TOKEN_DURATION,
  });
  return token;
}

async function findUserByEmail(email) {
  const user = await authRepository.findUserByEmail(email);
  return user;
}
