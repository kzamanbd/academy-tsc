import { Route } from "@/routes";
import { Request, Response } from "express";

const login = (req: Request, res: Response) => {
	console.log("login");
	res.json({ message: req.body });
};

const register = (req: Request, res: Response) => {
	console.log("register");
};

export const userRoutes: Route[] = [
	{
		path: "/auth/login",
		method: "post",
		handler: login
	},
	{
		path: "/auth/register",
		method: "post",
		handler: register
	}
];
