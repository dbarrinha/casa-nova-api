import UnauthorizedError from "./unauthorizedError";
import ServerError from "./serverError";

class HttpResponse {
	static badRequest(error: Error) {
		return {
			statusCode: 400,
			body: error,
		};
	}

	static serverError(aditionalInfo?: unknown) {
		return {
			statusCode: 500,
			body: new ServerError(),
			info: aditionalInfo,
		};
	}

	static unauthorizedError() {
		return {
			statusCode: 401,
			body: new UnauthorizedError(),
		};
	}

	static ok(body: unknown) {
		return {
			statusCode: 200,
			body,
		};
	}

	static created(body: unknown) {
		return {
			statusCode: 201,
			body,
		};
	}
}

export default HttpResponse;
