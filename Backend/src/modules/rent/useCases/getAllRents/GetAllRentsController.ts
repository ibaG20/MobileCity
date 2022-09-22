import { Request, Response } from "express";
import { GetAllRentsUseCase } from "./GetAlRentsUseCase";

export class GetAllRentsController {
    async handle(req: Request, res: Response){

        const getAllRentsUseCase = new GetAllRentsUseCase();

        const result = await getAllRentsUseCase.execute();

        return res.status(200).json(result);
    }
}      
  