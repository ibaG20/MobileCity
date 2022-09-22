import { Request, Response } from "express";
import { CreateTransportUseCase } from "./CreateTransportUseCase";

export class CreateTransportController {
    async handle(req: Request, res: Response){
        const { serialNumber, type, status } = req.body;

        const createTransportUseCase = new CreateTransportUseCase();

        const result = await createTransportUseCase.execute({ 
            serialNumber, 
            type, 
            status 
        }); 

        return res.status(200).json(result);
    }
}     