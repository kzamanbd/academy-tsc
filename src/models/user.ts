import { Model, Schema, model } from "mongoose";

export interface IUser extends Document {
	id: string;
	name: string;
	email: string;
	password: string;
}

const userSchema = new Schema<IUser>({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

// hide password field
userSchema.set("toJSON", {
	transform: (doc, { __v, password, ...rest }, options) => rest
});

const User: Model<IUser> = model<IUser>("User", userSchema);

export default User;
