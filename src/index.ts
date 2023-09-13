import dotenv from "dotenv";
import express, { Express } from "express";
import { routes } from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

routes.forEach((route) => {
	(app as any)[route.method](route.path, route.handler);
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
