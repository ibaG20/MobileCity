import { Request, Response } from "express";
import { Client } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

//import { GetClientByIdDTO } from "../../dtos/GetClientByIdDTO";

export class GetClientByIdUseCase {
  // async execute({id}: GetClientByIdDTO): Promise<Client>{
   async execute(req: Request, res: Response)/*: Promise<Client>*/{

        const {id} = req.params;
        const client = await prisma.client.findUnique({
            where:{
                id: Number(id)
            }
        });

        //return client;
    }
}