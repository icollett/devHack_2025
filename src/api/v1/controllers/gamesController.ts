import { NextFunction, Request, Response } from "express";
import * as gamesService from "../services/gamesService"
import { MessageResponse } from "../services/gamesService";

export const getQuizQuestion = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const question = await gamesService.getQuestion(req.params)
	} catch (error) {
		next(error)
	}
}
