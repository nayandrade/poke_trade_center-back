import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import "express-async-errors";
import cookieParser from "cookie-parser";
import router from "./routes/router.js";
import errorhandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(cookieParser);

app.use(errorhandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(process.env.DATABASE_URL);
  console.log(`Running on port ${PORT}`);
});
