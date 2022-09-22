import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export interface ICreateRentDTO {
    clientId: number;
    transportId: number; 
    status: boolean
}

export class CreateRentUseCase {
    async execute({ clientId, transportId, status }: ICreateRentDTO): Promise<void>{

        //verificar se filme existe
        const transportExists = await prisma.transport.findUnique({
            where: {
                id: transportId
            } 
        });

        if(!transportExists){
            throw new AppError("Transport does not exists!");
        }

        //-----------------------------
        if(transportExists.status == false){
            throw new AppError("Transport already rented!");
        }
        //-----------------------------

        //verificar se client existe
        const clientExists = await prisma.client.findUnique({
            where: {
                id: clientId
            }
        });

        if(!clientExists){
            throw new AppError("Client does not exists!");
        }

        //----------------------- 
        await prisma.rent.create({
            data: {
                clientId,
                transportId,
                status,
            }
        });
        
        await prisma.transport.update({
            where: {
                id: Number(transportExists.id)
            },
            data: {
                status: false
            }
        });
        //-----------------------
        
    }
}