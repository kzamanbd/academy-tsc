import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import { errorHandler, notFoundHandler, requestHandler } from "./middleware/errorHandler";
import router from "./routes";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8000;
app.use(cors({ credentials: true, origin: true }));
app.set("trust proxy", true);
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// request interceptor
app.use(requestHandler);
// routes
app.use("/api", router);
// not found handler
app.use(notFoundHandler);
// error handler
app.use(errorHandler);

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
