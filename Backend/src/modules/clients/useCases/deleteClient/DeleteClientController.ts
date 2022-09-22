import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

//nao deixar excluir se estiver ligado a algum rent

export default {
    async deleteClient(req: Request, res: Response) {
        //const { status } = req.body;
        const { id } = req.params;
        let client = await prisma.client.findUnique({
            where: {
                id: Number(id),
            }
        });

        //conferir se client ta dentro de alguma rent com status true
        const rent = await prisma.rent.findFirst({
            where:{
                clientId: Number(id)
            }
        });
        
        if(rent?.status == true){
            throw new AppError("Client can't be deleted!");
        }
        
        client = await prisma.client.update({
            where: {
                id: Number(id),
            },
            data: {
                status: false
            }
        });
        
        return res.status(201).json(client);
    }
    
} 