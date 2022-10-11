import * as authServices from "../services/authServices.js";

export async function signup(req, res) {
  const user = req.body;
  await authServices.createtUser(user);
  res.sendStatus(201);
}

export async function signin(req, res) {  
  const user = req.body;
  const token = await authServices.connectUser(user);

  res.cookie("token", token);
  res.status(200).send({ token });''
}

export async function getUserData(req, res) {
  const { id } = res.locals.userData;
  const userData = await authServices.getUserData(id);
  res.status(200).send(userData);
}

export async function updateUserData(req, res) {
  const { id } = res.locals.userData;
  const { password, userName, userImage } = req.body;
  const userData = await authServices.updateUserData(password, userName, userImage, id);
  res.status(200).send(userData);
}
