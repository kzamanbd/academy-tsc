import { NextFunction, Response } from "express";
import { GeneralError } from "../exceptions/request";

// request handler
export const requestHandler = (req: Request, res: Response, next: NextFunction) => {
	let correlationId = (req.headers as any)["x-correlation-id"];
	if (!correlationId) {
		correlationId = Date.now().toString();
		(req.headers as any)["x-correlation-id"] = correlationId;
	}

	res.set("x-correlation-id", correlationId);
	next();
};

// global error handler
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	const correlationId = (req.headers as any)["x-correlation-id"];
	let code = 500;
	if (err instanceof GeneralError) {
		code = err.getCode();
	}
	return res.status(code).json({
		correlationId,
		message: err.message
	});
};
