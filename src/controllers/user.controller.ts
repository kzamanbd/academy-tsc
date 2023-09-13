import { Request, Response } from "express";
import { IContact } from "../models/contact";
import { IUser } from "../models/user";
import { Route } from "../routes";
import { getContacts, getUsers } from "../services/user.service";

const loginHandler = (req: Request, res: Response) => {
	console.log("login");
	res.json({ message: req.body });
};

const registerHandler = async (req: Request, res: Response) => {
	console.log("register");
};

const usersHandler = async (req: Request, res: Response) => {
	try {
		const users: IUser[] = await getUsers();
		res.json({
			message: "Users fetched successfully",
			length: users.length,
			users
		});
	} catch (err: any) {
		res.json({ message: err.message });
	}
};

const contactsHandler = async (req: Request, res: Response) => {
	try {
		const contacts: IContact[] = await getContacts();
		res.json({
			message: "Contacts fetched successfully",
			length: contacts.length,
			contacts
		});
	} catch (err: any) {
		res.json({ message: err.message });
	}
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
