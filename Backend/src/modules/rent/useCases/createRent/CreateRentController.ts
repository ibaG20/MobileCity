import { Request, Response } from "express";
import { CreateRentUseCase } from "./CreateRentUseCase";

export class CreateRentController { 
    async handle(req: Request, res: Response){
        const { clientId, transportId, status } = req.body;

        const createRentUseCase = new CreateRentUseCase();

        await createRentUseCase.execute({ 
            clientId,
            transportId,
            status,
        }); 

        return res.status(200).send();
    }
}     