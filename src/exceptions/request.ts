export class GeneralError extends Error {
	constructor(message: string) {
		super();
		this.message = message;
	}

	getCode() {
		return 400;
	}
}

export class BadRequest extends GeneralError {
	constructor(message: string, code: number) {
		super(message);
		this.name = "BadRequest";
	}

	getCode() {
		return 400;
	}
}

export class NotFound extends GeneralError {
	constructor(message: string) {
		super(message);
		this.name = "NotFound";
	}

	getCode() {
		return 404;
	}
}
