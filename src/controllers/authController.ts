import type { Response, Request, NextFunction } from "express";
import User from "../entities/user";
import UserSchema from "../schemas/userSchema";
import HttpResponse from "../helpers/httpResponse";
import MissingParamError from "../helpers/missingParamError";

class AuthController {
	static async register(req: Request, res: Response, next: NextFunction) {
		try {
			const { name, email, password } = req.body;
			if (!name) {
				const error = HttpResponse.badRequest(new MissingParamError("name"));
				res.status(error.statusCode).send(error);
				next();
			}
			if (!email) {
				const error = HttpResponse.badRequest(new MissingParamError("email"));
				res.status(error.statusCode).json(error);
				next();
			}
			if (!password) {
				const error = HttpResponse.badRequest(
					new MissingParamError("password"),
				);
				res.status(error.statusCode).send(error);
			}

			const user = new User(name, email, password);
			const userDocument = new UserSchema(user);
			const createdUserDocument = await userDocument.save();
			const response = HttpResponse.created(createdUserDocument);
			res.status(response.statusCode).send(response);
		} catch (e: unknown) {
			console.log(e);
			const error = HttpResponse.serverError(e);
			res.status(error.statusCode).send(error);
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
