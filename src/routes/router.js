import { Router } from "express";
import authRouter from './authRouter.js';
import pokedexRouter from "./pokedexRouter.js";

const router = Router();

router.use(authRouter);
router.use(pokedexRouter)

export default router;