import mongoose from "mongoose";
import User from "../entities/user";

const userSchema = new mongoose.Schema(
	{
		name: String,
		email: { type: String, unique: true },
		password: String,
	},
	{
		toJSON: {
			transform: (_doc, ret) => {
				return {
					name: ret.name,
					email: ret.email,
				};
			},
		},
	},
);

userSchema.methods.toEntity = function () {
	return new User(this.name, this.email, this.password);
};

const UserSchema = mongoose.model("User", userSchema);

export default UserSchema;
