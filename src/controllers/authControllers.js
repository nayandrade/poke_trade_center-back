import * as authServices from "../services/authServices.js";

export async function signup(req, res) {
    const user = req.body
    await authServices.createtUser(user)
    res.sendStatus(201)
}

export async function signin(req, res)  {
    const user = req.body
    const token = await authServices.connectUser(user)
    res.status(200).send(token)
}