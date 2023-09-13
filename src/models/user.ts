import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	id: String,
	name: String,
	email: String,
	password: String
});

// hide password field
userSchema.set("toJSON", {
	transform: (doc, { __v, password, ...rest }, options) => rest
});

export interface UserDocument extends mongoose.Document {
	id: string;
	name: string;
	email: string;
	password: string;
}

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
