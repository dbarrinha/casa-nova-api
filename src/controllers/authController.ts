import type { Response, Request } from "express";
import User from "../entities/user";
import UserSchema from "../schemas/userSchema";

class AuthController {
	static async register(req: Request, res: Response) {
		try {
			const { name, email, password } = req.body;
			if (!name || !email || !password) throw new Error("Missing fields");

			const user = new User(name, email, password);
			const userDocument = new UserSchema(user);
			const createdUserDocument = await userDocument.save();
			res.status(201).json({ ...user.toJSON(), id: createdUserDocument.id });
		} catch (error) {
			res.status(400).send({ message: "erro!" });
		}
	}

	static async login(req: Request, res: Response) {
		try {
			const { email } = req.body;
			if (!email) throw new Error("Missing fields");

			const teste = await UserSchema.findOne({
				email: email,
			});
			res.status(200).send(teste);
		} catch (error: any) {
			res.status(400).send({ message: error.message });
		}
	}
}

export default AuthController;
