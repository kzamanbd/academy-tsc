import { Request, Response } from "express";
import { Route } from "../routes";
import { getUsers } from "../services/user.service";

const login = (req: Request, res: Response) => {
	console.log("login");
	res.json({ message: req.body });
};

const register = async (req: Request, res: Response) => {
	console.log("register");
};

const users = async (req: Request, res: Response) => {
	try {
		const users = await getUsers();
		res.json({
			message: "Users fetched successfully",
			users
		});
	} catch (err: any) {
		console.log(err);
		res.json({ message: err.message });
	}
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
	},
	{
		path: "/users",
		method: "get",
		handler: users
	}
];
