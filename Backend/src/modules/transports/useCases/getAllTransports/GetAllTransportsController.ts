import { Request, Response } from "express";
import { GetAllTransportsUseCase } from "./GetAllTransportsUseCase";

export class GetAllTransportsController {
    async handle(req: Request, res: Response){

        const getAllTransportsUseCase = new GetAllTransportsUseCase();

        const result = await getAllTransportsUseCase.execute(); 

        return res.status(200).json(result);
    }
}      