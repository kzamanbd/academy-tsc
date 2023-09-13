import { NextFunction, Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import { GeneralError } from "../exceptions/AppError";

// request handler
export const requestHandler = (req: Request, res: Response, next: NextFunction): void => {
	let correlationId = (req.headers as any)["x-correlation-id"];
	if (!correlationId) {
		correlationId = uuidV4();
		(req.headers as any)["x-correlation-id"] = correlationId;
	}
	res.set("x-correlation-id", correlationId);
	next();
};

// global error handler
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
	const correlationId = (req.headers as any)["x-correlation-id"];
	let code = 500;
	if (err instanceof GeneralError) {
		code = err.getCode();
	}
	res.status(code).json({
		correlationId,
		message: err.message || "Something went wrong"
	});
};

export const notFoundHandler = (req: Request, res: Response, next: NextFunction): void => {
	const correlationId = (req.headers as any)["x-correlation-id"];
	res.status(404).json({
		correlationId,
		message: "URL Not Found"
	});
	next();
};
