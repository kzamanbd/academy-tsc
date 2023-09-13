import express, { Request, Response } from "express";
import { userRoutes } from "./controllers/user.controller";

// route handler type
export type RequestHandler = (req: Request, res: Response) => void;

// route type
export interface Route {
	path: string;
	method: string;
	handler: RequestHandler | RequestHandler[];
}

// routes array
export const routes: Route[] = [
	{
		path: "/",
		method: "get",
		handler: (req: Request, res: Response) => {
			res.send("Express + TypeScript Server");
		}
	},
	...userRoutes
];

const router = express.Router();

routes.forEach((route) => {
	(router as any)[route.method](route.path, route.handler);
});

export default router;
