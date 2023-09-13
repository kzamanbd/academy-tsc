import { NextFunction, Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import { GeneralError } from "../exceptions/AppError";

const correlationHeader: string = "X-Correlation-ID";

// request handler
export const requestHandler = (req: Request, res: Response, next: NextFunction): void => {
	let correlationId = req.headers[correlationHeader];
	if (!correlationId) {
		correlationId = uuidV4();
		req.headers[correlationHeader] = correlationId;
	}
	res.set(correlationHeader, correlationId);
	next();
};

// global error handler
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
	const correlationId = req.headers[correlationHeader];
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
	const correlationId = req.headers[correlationHeader];
	res.status(404).json({
		correlationId,
		message: "URL Not Found"
	});
	next();
};
