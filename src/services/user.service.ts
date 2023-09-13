import Contact from "../models/contact";
import User from "../models/user";

export const getUsers = async () => {
	const users = await User.find();
	return users;
};

export const getContacts = async () => {
	const contacts = await Contact.find();
	return contacts;
};
