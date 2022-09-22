import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
    async handle(req: Request, res: Response){
        const { cpf, name, phone, email, status } = req.body;

        const createClientUseCase = new CreateClientUseCase();

        const result = await createClientUseCase.execute({ cpf, name, phone, email, status });

        return res.status(200).json(result);
    }
}     
 