class ServerError extends Error {
	constructor() {
		super("Internal Error");
		this.name = "ServerError";
	}
}

export default ServerError;
