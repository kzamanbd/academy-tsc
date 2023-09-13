import { Schema, model } from "mongoose";

export interface IContact {
	id: string;
	name: string;
	mobile: string;
	address: string;
	e_tin: string;
	old_tin: string;
	tin_date: string;
	police_station: string;
	circle_name: string;
	created_at: Date;
	updated_at: Date;
}

const contactSchema = new Schema<IContact>({
	id: String,
	name: String,
	mobile: String,
	address: String,
	e_tin: String,
	old_tin: String,
	tin_date: String,
	police_station: String,
	circle_name: String,
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
});

const Contact = model<IContact>("Contacts", contactSchema);

export default Contact;
