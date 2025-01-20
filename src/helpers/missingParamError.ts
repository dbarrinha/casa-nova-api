class MissingParamError extends Error {
	constructor(paramError: string) {
		super(`Missing Param ${paramError}`);
		this.name = `MissingParamError: ${paramError}`;
		this.message = "teste";
	}
}

export default MissingParamError;
