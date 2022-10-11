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
marketRouter.delete("/mymarket/:id", jwtMiddleware, deleteFromMarket);
marketRouter.get("/search/:pokename", jwtMiddleware, searchFromMarketByName);
marketRouter.get("/search/:pokeowner", jwtMiddleware, searchFromMarketByOwner);
marketRouter.get(
  "/search/:pokenumber",
  jwtMiddleware,
  searchFromMarketByNumber
);

export default marketRouter;
