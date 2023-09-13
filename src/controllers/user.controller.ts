import { Request, Response } from "express";
import { Route } from "../routes";
import { getUsers } from "../services/user.service";

const loginHandler = (req: Request, res: Response) => {
	console.log("login");
	res.json({ message: req.body });
};

const registerHandler = async (req: Request, res: Response) => {
	console.log("register");
};

const usersHandler = async (req: Request, res: Response) => {
	try {
		const users = await getUsers();
		res.json({
			message: "Users fetched successfully",
			length: users.length,
			users
		});
	} catch (err: any) {
		res.json({ message: err.message });
	}
};

const contactsHandler = (req: Request, res: Response) => {
	console.log("getContactsHandler");
	res.json({ message: "getContactsHandler" });
};

export const userRoutes: Route[] = [
	{
		path: "/auth/login",
		method: "post",
		handler: loginHandler
	},
	{
		path: "/auth/register",
		method: "post",
		handler: registerHandler
	},
	{
		path: "/users",
		method: "get",
		handler: usersHandler
	},
	{
		path: "/contacts",
		method: "get",
		handler: contactsHandler
	}
];
