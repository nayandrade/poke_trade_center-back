import { Router } from "express";
import jwtMiddleware from "../middlewares/jwtMiddleware.js";
import {
  getMarket,
  postIntoMarket,
  getAllPokemons,
  tradeFromMarket,
  getMyMarket,
  deleteFromMarket,
  searchFromMarketByName,
  searchFromMarketByOwner,
  searchFromMarketByNumber,
} from "../controllers/marketControllers.js";

const marketRouter = Router();

marketRouter.get("/market", jwtMiddleware, getMarket);
marketRouter.post(
  "/market/:pokenumber/:pokeintent",
  jwtMiddleware,
  postIntoMarket
);
marketRouter.post("/trade/:pokeintent/:pokeid", jwtMiddleware, tradeFromMarket);
marketRouter.get("/allpokemons", jwtMiddleware, getAllPokemons);
marketRouter.get("/mymarket", jwtMiddleware, getMyMarket);
marketRouter.get("/mymarket/search/byname", jwtMiddleware, searchFromMarketByName);
marketRouter.get("/mymarket/search/bynumber", jwtMiddleware, searchFromMarketByOwner);
marketRouter.delete("/mymarket/:id", jwtMiddleware, deleteFromMarket);
marketRouter.get("/search/byname/:pokename", jwtMiddleware, searchFromMarketByName);
marketRouter.get("/search/byowner/:pokeowner", jwtMiddleware, searchFromMarketByOwner);
marketRouter.get(
  "/search/bynumber/:pokenumber",
  jwtMiddleware,
  searchFromMarketByNumber
);

export default marketRouter;
