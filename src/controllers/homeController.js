import * as homeServices from "../services/homeServices.js";

export async function getMyHomepage(req, res) {
  const { id } = res.locals.userData;
  const home = await homeServices.getMyHomepage(id);
  console.log('name', req.cookies)
  res.status(200).send(home);
}